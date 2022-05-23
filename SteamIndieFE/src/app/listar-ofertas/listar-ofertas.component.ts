import { Component, OnInit } from '@angular/core';
import { ofertas } from '../../Datas/Ofertas'

@Component({
  selector: 'app-listar-ofertas',
  templateUrl: './listar-ofertas.component.html',
  styleUrls: ['./listar-ofertas.component.css']
})
export class ListarOfertasComponent implements OnInit {
  public Ofertas
  constructor() { }

  ngOnInit(): void {
    this.Ofertas=ofertas
  }

}
