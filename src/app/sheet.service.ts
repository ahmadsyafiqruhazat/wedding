import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SheetObject {
  range: string;
  majorDimension: string;
  values: string[][];
}

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  sheetId: any = {
    "hadi" : '16_drSz13ULY4BF4492rrz2TdrNqrKTvo4qsXG_Tpyck',
    "adinah": '144PFp2VGOMTgrC402qnUx4iJLSrAmFOzLjnm-yyHA3A',
  };
  sheetKey = 'AIzaSyATFA3fWwgQ9zREQLhvNEe1zVhKkBiMkcA';

  constructor(private http: HttpClient) {}

  get(
    tabName: string,
    cellRange: string,
    majorDimension: string,
    type: string,
  ): Observable<SheetObject> {
    return this.http.get<SheetObject>(
      `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId[type]}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${this.sheetKey}`,
      {}
    );
  }

  getSchedule(type: string): Observable<SheetObject> {
    return this.get('schedule', 'A1:C', 'ROWS', type);
  }

  getData(type: string): Observable<SheetObject> {
    return this.get('data', 'A1:B8', 'COLUMNS', type);
  }
}
