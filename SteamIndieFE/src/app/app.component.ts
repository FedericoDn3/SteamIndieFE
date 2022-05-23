import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {SocialAuthService} from "angularx-social-login";
import { Router, ActivatedRoute } from '@angular/router';
import { islog ,LogOutUsu } from '../Servicos/Usuario'
import{GoogleLoginProvider} from "angularx-social-login";
import { Reportes,tabla } from '../Servicos/Reportes'
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Pin: FormControl;
  title: 'Prueba';
  public Logeado:  boolean=false;
  public Roll: String='Usuario';
  public data: string[];
  constructor(private _router: Router, private route: ActivatedRoute, private authService: SocialAuthService){
    window.addEventListener('storage', (evt) => {
        this.GetLogeado()
    })
  }
  ngOnInit(): void {
    this.GetLogeado()
  }
  
  GetLogeado = async () => {
    let data = await islog()
    if (data) {
      let token = await localStorage.getItem('token')
      if (token) {
        this.Roll = token.split('%27')[1]
      }
      this.data=data
    }
    this.Logeado= !!data
  }

  tabla = async () => {
    if (this.Logeado) {
      tabla()
    }
  }

  Reportes = async () => {
    if (this.Logeado) {
      Reportes()
    }
  }

  CerrarSecion = async () => {
    if (this.Logeado) {
      this.Logeado=false
      LogOutUsu()
      this._router.navigate(['/Login']);
    }
  }
}