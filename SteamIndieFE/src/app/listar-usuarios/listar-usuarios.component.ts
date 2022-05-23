import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Listar, Buscar } from '../../Servicos/Usuario'
import { Usuarios } from '../../Datas/Usuarios'


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  Usuarios
  Query
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.GETdataInicio()
  }

  // Buscar = async () =>{
  //   await Buscar(this.Query).then((response) => {
  //     this.Usuarios = response
  //   }
  // }

  Buscar = async () =>{
    // let U = Usuarios
    // this.Usuarios = U.forEach(user => {
    //   let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(user['img'])))
    //   // user['img'] = 'data:image/jpg;base64,'+base64String
    //   user['Img'] = 'data:image/jpg;base64,'+base64String
    //   console.log(base64String)
    //   console.log(user['Img'])
    // });
    await Buscar(this.Query).then((response) => {
      console.log(response)
      if (response) {
        response.forEach(user => {
          let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(user['img'])))
          user['Img'] = 'data:image/jpg;base64,'+base64String
        });
        this.Usuarios = response
      }
    })
  }


  GETdataInicio = async () =>{
    // let U = Usuarios
    // U.forEach(user => {
    //   let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(user['img'])))
    //   user['Img'] = 'data:image/jpg;base64,'+base64String
    // });
    // this.Usuarios = U
    await Listar().then((response) => {
      console.log(response)
      if (response) {
        response.forEach(user => {
          let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(user['img'])))
          user['Img'] = 'data:image/jpg;base64,'+base64String
        });
        this.Usuarios = response
      }
    })
  }

  Perfil(Usuario){
    this.router.navigate(['/PerfilAjeno', Usuario['idUsu'] ]);
  }
}
