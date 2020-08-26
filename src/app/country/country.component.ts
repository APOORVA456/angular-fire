import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/freeApi.service';
import { Field } from '../classes/fields'
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  listdata: Field[];
  constructor(private _freeapi: DataService){}

  ngOnInit() {
    this._freeapi.getCountries().subscribe(
      data =>
      {
        this.listdata = data;
      }
    );
    console.log(this.listdata)
  }
}
