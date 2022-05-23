import { Component, OnInit } from '@angular/core';
import { GetPerfil } from '../../Servicos/Usuario'
import { Router, ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public Perfil
  vendedor = false
  id
  public Publicaciones
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.GetDetalle()
    this.Perfil
  }

  GetDetalle = async () => {
    var J = []
    // this.Juego = products.find(x => x.id === this.juegoId);
    // this.Comentarios = comentarios;
    // + this.Juego.Imagen);
    let token = localStorage.getItem('token')
    if (token) {
      this.id = token.split('%27')[0]
      this.vendedor = token.split('%27')[1] === 'Vendedor'
      await GetPerfil(this.id).then((response) => {
        this.Perfil = response
        let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(this.Perfil.img)))
        this.Perfil.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String)
      })
    }
  }
}