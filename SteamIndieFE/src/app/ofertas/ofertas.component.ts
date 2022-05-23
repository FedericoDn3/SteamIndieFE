import { Component, OnInit } from '@angular/core';
import { NuevaOfertaComponent } from '../../app/nueva-oferta/nueva-oferta.component'
import { ListarOfertasComponent } from '../../app/listar-ofertas/listar-ofertas.component'
import { ListarJuegosOferta } from '../../Servicos/Juegos'
import { DomSanitizer } from '@angular/platform-browser';
import { Juegos } from 'src/Datas/products';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  currentItems
  Roll: string='Usuario'
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cargar()
  }

  cargar = async () => {
    let token = await localStorage.getItem('token')
    if (token) {
      this.Roll = token.split('%27')[1]
      if (this.Roll==='Usuario') {
        await ListarJuegosOferta().then((response) => {
          let juegos = response
          juegos.forEach(J => {
            const base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(J['imagen'])))
            J['imagen'] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String)
          });
          this.currentItems = juegos
          console.log(this.currentItems)
        })
      }
    }
  }
}
