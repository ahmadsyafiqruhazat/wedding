import { Component, OnInit } from '@angular/core';
import { SheetService } from '../sheet.service';

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'wedding';
  data: any;
  schedule: any;
  vaccinated: string = '';
  countDownConfigDays: any;
  countDownConfig: any;
  isDDay = false;
  constructor(private sheet: SheetService) {
    sheet.getData().subscribe((res) => {
      this.data = {};
      res.values[0].forEach((key, idx) => {
        this.data[key] = res.values[1][idx];
      });
      this.countDownConfig = {
        stopTime: new Date(this.data.date).getTime(),
        format: "mm 'minutes' ss 'seconds'",
      };
      this.countDownConfigDays = {
        stopTime: new Date(this.data.date).getTime(),
        format: `MM months DD days HH hours`,
        formatDate: ({ date, formatStr }: {date:any, formatStr: any}) => {
          let duration = Number(date || 0);
    
          return CountdownTimeUnits.reduce((current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
              const v = Math.floor(duration / unit);
              duration -= v * unit;
              return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
                return v.toString().padStart(match.length, '0');
              });
            }
            return current;
          }, formatStr);
        },
      };
      this.isDDay = new Date() >= new Date(this.data.date) ? true : false;
    });

    sheet.getSchedule().subscribe((res) => {
      let [keys, ...rows] = res.values;
      this.schedule = rows.map((row) => {
        let item: any = {};
        keys.forEach((key, idx) => {
          item[key] = row[idx];
        });
        return item;
      });
    });
  }
  setVaccinated(val: any) {
    this.vaccinated = val;
  }
  ngOnInit(): void {}
}
