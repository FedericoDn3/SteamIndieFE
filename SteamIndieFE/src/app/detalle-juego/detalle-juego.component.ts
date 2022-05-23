import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Juegos } from '../../Datas/products'
import { comentarios } from '../../Datas/comentarios'
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router'
import { FormControl, FormGroup } from '@angular/forms'
import { islog } from '../../Servicos/Usuario'
import { CalificarJuego, ReportarComentario, ReportarJuego, ComprarJuego, GetJuego, GetComentarios } from '../../Servicos/Juegos'

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {
  public juegoId
  public Juego
  public Comentarios =[]
  public Nota
  public Compra = {
    comcom: '',
    calcom: ''
  }
  public calificaciones = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.juegoId = id
    this.GetDetalle()
  }

  GetDetalle = async () => {
    var J = []
    await GetJuego(this.juegoId).then((response) => {
      this.Juego = response
      let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(response['imagen'])))
      this.Juego.imagen = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String)
      let tags = response['tags'].split(',')
      this.Juego.tags = tags
    })
    this.GetComentarios();
    this.Juego.video = this._sanitizer.bypassSecurityTrustResourceUrl(this.Juego.video);
  }
  
  MandarOpinion= async () => {
    console.log(this.Compra)
    let token = localStorage.getItem('token')
    if (token && this.juegoId) {
      let id = token.split('%27')[0]
      await CalificarJuego(this.juegoId, id, this.Compra.comcom, this.Compra.calcom).then((response) => {
        console.log(response,"response")
        let res = response
      })
    }
  }
  Reportar = async () => {
    await ReportarJuego(this.juegoId).then((response) => {
      let res = response
      console.log(res,"response")
      if (res) {
        this.router.navigate(['/Buscador']);
      }
    })
  }
  
  ReportarComentario= async (idUsu) => {
    await ReportarComentario(this.juegoId, idUsu).then((response) => {
      let res = response
      console.log(res,"response")
      if (res) {
        //cartel in progress...
      }
    })
  }
  GetComentarios = async () => {
    let total = 0
    let cant =0
    await GetComentarios(this.Juego.idJuego).then((response) => {
      console.log(response,"response")
      response.forEach(C => {
        if (C['comcom']) {
          this.Comentarios.push(C)
        }
        if (C['calcom']) {
          total = total + parseFloat(C['calcom'])
          cant++
        }
      });
      this.Nota = total/cant
    })
  }
  Comprar() {
    this.router.navigate(['/ComprarJuegoComponent', this.juegoId ]);
  }
}
