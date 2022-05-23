import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { GetData } from '../../Servicos/Categorias'
import { NuevoJuego } from '../../Servicos/Juegos'
import { categorias,Tags } from '../../Datas/datas'
import { FormControl, FormGroup } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser';
import { Moment } from 'moment'
import * as moment from 'moment';
@Component({
  selector: 'app-publicar-juego',
  templateUrl: './publicar-juego.component.html',
  styleUrls: ['./publicar-juego.component.css']
})
export class PublicarJuegoComponent implements OnChanges {
  public categorias
  public tags
  public tag
  QuerySelected = [];
  imagen = null
  Video = null
  public Juego = {
    nomjuego: '',
    descripcion: '',
    video: null,
    categoria: '',
    fechaL: moment().format("yyyy-MM-DD"),
    tags: '',
    imagen: null,
    url: '',
    requisitos: '',
    precio: 0,
    calificacion: '2',
    ban: '1',
    idUsu: ''
  };
  ngOnChanges(changes: SimpleChanges) {
    // changes.imagen.
  }
  constructor(private _sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.GetData()
    //this.GetCategorias()
  }

  Agregar(nom){
    if(this.QuerySelected.find(x=>x == nom)){
      this.QuerySelected =this.QuerySelected.filter(x => x !== nom)
    } else {
      this.QuerySelected.push(nom)
    }
  }
  AgregarCat(nom){
    this.Juego.categoria= nom
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
  GetData = async () => {
    this.categorias = categorias
    this.tags = Tags
    // await GetCategorias().then((response) => {
    //   this.categorias = response
    // })
  }
  // fileChangeEvent(fileInput:any){
  //   this.imagen=<Array<File>> fileInput.target.files;
  // }
  SetImagen = async (ev) => {
    this.imagen = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(ev.target.files[0]));
    this.Juego.imagen = ev.target.files[0]
    this.Juego.imagen = await this.toBase64(ev.target.files[0])
    this.Juego.imagen = this.Juego.imagen.split('data:image/jpeg;base64,')[1]
  }
  SetVideo = async () => {
    console.log(this.Juego.video)
    this.Video = this._sanitizer.bypassSecurityTrustResourceUrl(this.Juego.video);
    // this.Juego.video = await this.toBase64(ev.target.files[0])
    // this.Juego.video = this.Juego.video.split('data:image/jpeg;base64,')[1]
  }
  Crear = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      this.Juego.idUsu = token.split('%27')[0]
      this.Juego.tags = this.QuerySelected.join()
      console.log('this.Juego', this.Juego)
      await NuevoJuego(this.Juego).then((response) => {
        console.log(response,"response")
        let res = response
        })
    }
  }

}
