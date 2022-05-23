import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { islog } from '../Servicos/Usuario'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router){}
  canActivate = async () : Promise<boolean> => {
    let b = await islog()
    if (b) {
      return true
    } else {
      this._router.navigate(['Login'])
      return false
    }
  }
}
