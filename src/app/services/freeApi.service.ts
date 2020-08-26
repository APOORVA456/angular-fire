import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
  public getCountries(): Observable<any>{
    return this.httpClient.get('https://starlord.hackerearth.com/TopRamen', {
        headers:
          new HttpHeaders(
            {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Credentials': 'true',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'MyClientCert': '',        // This is empty
              'MyToken': ''              // This is empty
            }
          )
      });
  }
}