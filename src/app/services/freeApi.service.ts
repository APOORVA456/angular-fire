import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
  getcountries(): Observable<any> {
    console.log(this.httpClient.get('http://starlord.hackerearth.com/TopRamen'));
    return of(this.httpClient.get('http://starlord.hackerearth.com/TopRamen'));
  }
}