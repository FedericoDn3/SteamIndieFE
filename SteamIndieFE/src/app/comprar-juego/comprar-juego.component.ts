import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GetJuego, ComprarJuego } from '../../Servicos/Juegos'
import { Juegos } from '../../Datas/products'
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router'
import {MatDialog} from '@angular/material/dialog';
import { DialogComprarComponent } from '../dialog-comprar/dialog-comprar.component';
import * as moment from 'moment';

@Component({
  selector: 'app-comprar-juego',
  templateUrl: './comprar-juego.component.html',
  styleUrls: ['./comprar-juego.component.css']
})
export class ComprarJuegoComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer) { }
  public juegoId
  public Juego
  public IdUsu
  public Saldo

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.juegoId = id
    this.GetDetalle()
  }

  GetDetalle = async () => {
    var J = []
    this.Juego = Juegos;
    // this.videoPath = this._sanitizer.bypassSecurityTrustResourceUrl(this.Juego.Video);
    // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    // + this.juego.Imagen;
    // await GetJuego(this.juegoId).then((response) => {
    //   console.log(response,"response")
    //   this.Juego = response
    // })
  }
  
  Comprar = async () => {
    this.IdUsu = localStorage.getItem('token').split('%27')[0]
    this.Saldo = localStorage.getItem('token').split('%27')[2]
    if (this.Juego.Precio > this.Saldo) {
      const dialogRef =this.dialog.open(DialogComprarComponent, {})
      dialogRef.afterClosed().subscribe(res=>{
        if (res) {
          this.router.navigate(['/billetera']);
        } else {
          this.router.navigate(['/DetalleJuegoComponent', this.Juego['id'] ]);
        }
      })
    } else {
      await ComprarJuego(this.juegoId, this.IdUsu).then((response) => {
        if (response) {
          this.router.navigate(['/DetalleJuegoComponent', this.Juego['id'] ]);
        }
      })
    }
  }
}