import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SocialAuthService} from "angularx-social-login";
import {SocialUser} from "angularx-social-login";
import{GoogleLoginProvider} from "angularx-social-login";
import { FormControl, FormGroup } from '@angular/forms'
import { LogUsu, UsuarioLog,LogOutUsu } from '../../Servicos/Usuario'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() data = new EventEmitter<object>();
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;
  USU = new FormGroup({
    Usuario: new FormControl(''),
    Contrasenia:new FormControl(''),
  })
  Contrasenia: string
  Usuario: string
  
  
  
  constructor(private _router: Router, private authService: SocialAuthService) {
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID))
  }
  
  signIn = async () => {
    let body = new URLSearchParams();
    body.append('Nick', this.USU.value.Usuario);
    body.append('Pass', this.USU.value.Contrasenia);
    var L = await UsuarioLog(this.USU.value.Usuario, this.USU.value.Contrasenia)
    if (L) {
      this.data.emit();
      await window.dispatchEvent( new Event('storage') )
      this._router.navigate(['Buscador'])
    } else {
      this._router.navigate(['Login'])
    }
  }
  ngOnInit() {
  }
}
