import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import { GetPerfilAjeno } from '../../Servicos/Usuario'
import { User } from '../../Datas/User'

@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})
export class PerfilAjenoComponent implements OnInit {
  public Perfil
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    this.GetDetalle()
  }

  ngOnInit(): void {
  }
  
  GetDetalle = async () => {
    let Id = this.route.snapshot.paramMap.get('Id');
    // this.Perfil = User
    // let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(this.Perfil.img)))
    // this.Perfil.Img = 'data:image/jpg;base64,'+base64String
    // console.log(this.Perfil, Id)
    await GetPerfilAjeno(Id).then((response) => {
      if (response) {
        let p = response
        let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(p['img'])))
        p['Img'] = 'data:image/jpg;base64,'+base64String
        this.Perfil = p
      }
    })
  }
}
