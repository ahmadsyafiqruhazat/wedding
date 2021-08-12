import { Component, OnInit } from '@angular/core';
import { SheetService } from '../sheet.service';

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
        format: "dd 'days' hh 'hours' ",
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
