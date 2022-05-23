import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { registrarUsu } from '../../Servicos/Usuario'
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  img
  Vendedor: boolean=false
  USU = {
    Nom: '',
    Apell:'',
    Img: null,
    Pass:'',
    Pass2:'',
    Nick: '',
    Sexo: '',
    Email:'',
    Rol:'',
    Fnac: moment().format("DD/MM/yyyy")
  }
  constructor(private router: Router, private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  SetImagen = async (ev) => {
    this.img = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(ev.target.files[0]));
    this.USU.Img = ev.target.files[0]
    this.USU.Img = await this.toBase64(ev.target.files[0])
    this.USU.Img = this.USU.Img.split('data:image/jpeg;base64,')[1]
  }
  

  toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });

  EsVendedor= async (ev) => {
    if (this.Vendedor == true) {
      this.USU.Rol = 'Vendedor'
    } else {
      this.USU.Rol = 'Usuario'
    }
  }
  Mandar() {
    console.log(this.USU)
    var result = registrarUsu(this.USU)
    if (result) {
      this.router.navigate(['/Login']);
    }
    console.log(result)
  }
}
