import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
  public getcountries(){
    return this.httpClient.get('http://starlord.hackerearth.com/TopRamen');
  }
}