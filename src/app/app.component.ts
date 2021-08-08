import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wedding';
  schedule: {
    name: string;
    time: string;
    detail: string;
  }[] = [
    {
      name: 'Arrival',
      time: '11:00am',
      detail: 'Please arrive at 11:00am. Guests are to be seated by 11:30am.',
    },
    {
      name: "Groom's Walk In",
      time: '11:45',
      detail: '',
    },
    {
      name: "Bride's Walk In",
      time: '11:50',
      detail: 'Here comes the bride!',
    },
    {
      name: 'Solemnization & Ring Ceremony',
      time: '12:00pm - 1:00pm',
      detail:
        'The Solemnization will start promptly at 12:00pm and will go on until roughly 1:00pm.',
    },
    {
      name: 'Appetizer & Soup',
      time: '12:45pm',
      detail: '',
    },
    {
      name: 'Main Course',
      time: '1:30pm',
      detail: '',
    },
    {
      name: 'Second Walk In',
      time: '2:15pm',
      detail: '',
    },
    {
      name: 'Photo Taking',
      time: '2:30pm',
      detail: '',
    },
    {
      name: 'Dessert',
      time: '3:00pm',
      detail: '',
    },
    {
      name: 'Final Walk In & Cake Cutting',
      time: '3:30pm - 4:00pm',
      detail: '',
    },
  ];
  vaccinated: string = '';
  constructor() {
  }
  setVaccinated(val: any) {
    this.vaccinated = val;
  }
}
