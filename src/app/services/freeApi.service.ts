import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
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
getCountries(): Observable<any> {
    return this.httpClient.get('http://starlord.hackerearth.com/TopRamen')
  }
}