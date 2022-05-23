import { Component, OnInit, Input } from '@angular/core';
import { comentarios } from 'src/Datas/comentarios';
import { estados } from '../../Datas/publicaciones'
import { GetEstados } from '../../Servicos/Usuario'
import { getUserLog,NuevoEstado } from '../../Servicos/Usuario'
import { Moment } from 'moment'
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-estados',
  templateUrl: './Estados.component.html',
  styleUrls: ['./Estados.component.css']
})
export class EstadosComponent implements OnInit {

  estados
  @Input() propio = false
  @Input() idPerfil
  imgestado
  public Estado = {
    comestado: "",
    imgestado:null,
    idUsu:"",
    festado:""
  }
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.GETdata()
  }

  // asignar = async () => {
  //   this.estados = await estados.map(function(x) {
  //     x['imagen'] = 'data:image/jpg;base64,'+ x['imagen'];
  //     return x;
  //   });
  // }
  GETdata = async () =>{
    await GetEstados(this.idPerfil).then((response) => {
      this.estados = response.map(function(x) {
        let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(x['imgestado'])))
        x['festado'] = moment(x['festado'],'YYYY-MM-DD[T]HH:mm:ss').format("DD/MM/yyyy");
        x['Imgestado'] = 'data:image/jpg;base64,'+ base64String;
        return x;
      });
    })
  }
  SetImagen = async (ev) => {
    this.imgestado = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(ev.target.files[0]));
    this.Estado.imgestado = ev.target.files[0]
    this.Estado.imgestado = await this.toBase64(ev.target.files[0])
    this.Estado.imgestado = this.Estado.imgestado.split('data:image/jpeg;base64,')[1]
    console.log(this.Estado.imgestado)
  }

  publicar= async () => {
    let token = localStorage.getItem('token')
    if (token && this.Estado) {
      this.Estado.idUsu = token.split('%27')[0]
      this.Estado.festado = moment().format("yyyy-MM-DD")
      await NuevoEstado(this.Estado).then((response) => {
        let res = response
      })
    }
  }
  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
}
