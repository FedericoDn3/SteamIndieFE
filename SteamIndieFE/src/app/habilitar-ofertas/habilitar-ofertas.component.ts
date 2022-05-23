import { Component, OnInit } from '@angular/core';
import { ofertas } from '../../Datas/Ofertas'
import { Juegos } from '../../Datas/products'
import { FormControl, FormGroup } from '@angular/forms'
import { AgregarOferta } from '../../Servicos/Oferta'

@Component({
  selector: 'app-habilitar-ofertas',
  templateUrl: './habilitar-ofertas.component.html',
  styleUrls: ['./habilitar-ofertas.component.css']
})
export class HabilitarOfertasComponent implements OnInit {
  public Ofertas
  public Oferta
  public MisJuegos
  public OfertaJuegos= new Array()

  constructor() { }

  ngOnInit(): void {
    this.Ofertas=ofertas
    this.MisJuegos=Juegos
  }

  Agregar(Juego){
    if (!this.OfertaJuegos.find(element => element.id === Juego.id)) {
      this.OfertaJuegos.push(Juego)
    }
  }

  Quitar(Juego){  
    this.OfertaJuegos = this.OfertaJuegos.filter(J => J !== Juego);
  }
  Mandar(){
    if (this.OfertaJuegos.length>0 && this.Oferta.ID) {
      AgregarOferta(this.Oferta)
    }
  }
}
