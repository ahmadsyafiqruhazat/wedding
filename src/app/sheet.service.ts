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
  sheetId = '1Do7VVQyvJF4RVfMtNw4rvsBuYBPtNvvN2iIGYkVpqok';
  sheetKey = 'AIzaSyATFA3fWwgQ9zREQLhvNEe1zVhKkBiMkcA';

  constructor(private http: HttpClient) {}

  get(
    tabName: string,
    cellRange: string,
    majorDimension: string
  ): Observable<SheetObject> {
    return this.http.get<SheetObject>(
      `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${this.sheetKey}`,
      {}
    );
  }

  getSchedule(): Observable<SheetObject> {
    return this.get('schedule', 'A1:C', 'ROWS');
  }

  getData(): Observable<SheetObject> {
    return this.get('data', 'A1:B7', 'COLUMNS');
  }
}
