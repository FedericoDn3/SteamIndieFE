import { Component, OnInit, Input, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Juegos } from '../../Datas/products'
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  @Input() Juegos
  @Input() esColeccion = false
  constructor(private router: Router, private _sanitizer: DomSanitizer) {
  }
  Comprar(Juego: object) {
    this.router.navigate(['/ComprarJuegoComponent', Juego['idJuego'] ]);
  }
  Detalle(Juego: object) {
    this.router.navigate(['/DetalleJuegoComponent', Juego['idJuego'] ]);
  }
  ngOnInit(): void {
  }

}
