import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Tarjeta } from '../models/Tarjeta';
import { AppRoutingModule } from '../app-routing.module'
import {MatButtonModule} from'@angular/material/button'
import axios from "axios";
@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit  {
  Saldo = 0
  Tarjeta = new Tarjeta
  constructor() { }
Mandar(value: Tarjeta) {
    axios.post('http://localhost:8080/api-0.0.1-SNAPSHOT/SetSaldo', {
      ID: 1,
      Saldo: 45
    })
    // axios.get('https://api.github.com/users/mapbox')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    console.log(this.Tarjeta.info)
    // this.CargarSaldo.emit(this.Tarjeta);
  }
  ngOnInit(): void {
  }

}
