import { Component, OnInit } from '@angular/core';
import { Juegos } from '../../Datas/products'
import { GetJuegos,ComprarJuego,constListarCompras } from '../../Servicos/Juegos'
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import {Observable, Observer} from 'rxjs';

export interface Tab {
  label: string;
}


@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.css']
})
export class ColeccionComponent implements OnInit {
  currentItems = [];
  public Query=''
  Vendedor: Boolean = false
  asyncTabs: Observable<Tab[]>
  public Juegos
  constructor(private router: Router, private _sanitizer: DomSanitizer) {
    // this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
    //   setTimeout(() => {
    //     observer.next([
    //       {label: 'Coleccion'},
    //       {label: 'Pubilcados'}
    //     ])
    //   }, 1000)
    // })
    // this.asignar()
    // this.Juegos = products.map(function(x) {
    //   console.log()
    //   // x['Imagen'] = 'data:image/jpg;base64,'+ x['Imagen'];
    //   return x;
    // });
  }
  onTabChanged = async ($event) => {
    await this.asignar('$event.index', $event.index+1)
  }
  ngOnInit(): void {
    this.asignar(null, null)
  }

  // Buscar  = async (tipo) => {
  //   await this.asignar('Query', tipo)
  // }

  asignar = async (Query, tipo) => {
    let token = await localStorage.getItem('token')
    if (token) {
      this.Vendedor = token.split('%27')[1] === 'Vendedor'
    }
    await constListarCompras(token.split('%27')[0]).then((response) => {
      this.currentItems = response
    })
  }
  // asignar = async () => {
  //   var J = []
  //   // await GetJuegos().then((response) => {
  //   //   this.Juegos = response
  //   // })
  // }
  // Descargar() {
  //   // this.router.navigate(['/ComprarJuegoComponent', Juego['id'] ]);
  //   console.log("descargar")
  // }
  // Detalle(Juego: object) {
  //   console.log(Juego['id'])
  //   this.router.navigate(['/DetalleJuegoComponent', Juego['id'] ]);
  //   // this.router.navigate(['/DetalleJuegoComponent', Juego['id'] ]);
  // }
  // ngOnInit(): void {
  // }
}
