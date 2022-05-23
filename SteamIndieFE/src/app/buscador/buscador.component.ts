import { Component, OnInit } from '@angular/core';
import { GetJuegos, ListarJuegosOferta, ListarJuegos, GetComentarios, getCategorias, getTags } from '../../Servicos/Juegos'
import { GetData } from '../../Servicos/Categorias'
import {Observable, Observer} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

export interface Tab {
  label: string;
}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {
  currentItems = [];
  public Query=' '
  Select
  cats
  tags
  QuerySelected = [];
  dataSelects
  public tipo = 1
  public tabSelected
  asyncTabs: Observable<Tab[]>
  constructor(private _sanitizer: DomSanitizer) { 
    this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Nombre'},
          {label: 'Categorias'},
          {label: 'Tags'}
        ])
      }, 1000)
    })
  }
  onTabChanged = async ($event) => {
    this.tabSelected = $event.index
    this.tipo = 1
    this.tipo = this.tabSelected+1
    if (this.tipo === 2) {
      this.Select=this.cats
    }
    if (this.tipo === 3) {
      this.Select=this.tags
    }
    if (this.currentItems.length === 0) {
      await this.ListarJuegos()
    }
  }
  ngOnInit(): void {
    this.GETdata()
  }
  Agregar(nom){
    if(this.QuerySelected.find(x=>x == nom)){
      this.QuerySelected =this.QuerySelected.filter(x => x !== nom)
    } else {
      this.QuerySelected.push(nom)
    }
    this.asignar()
  }
  AgregarCat(nom){
      this.Query= nom
      this.asignar()
  }
  GETdata = async () =>{
    await getCategorias().then((response) => {
      this.cats = response
    })
    await getTags().then((response) => {
      this.tags = response
    })
  }

  ListarJuegos = async () =>{
    await ListarJuegos().then((response) => {
      response.forEach(J => {
        let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(J['imagen'])))
        J['imagen'] = 'data:image/jpg;base64,'+base64String
      });
      this.currentItems = response
    })
  }

  asignar = async () => {
    if (this.QuerySelected || this.Query) {
      if (this.tipo == 3) {
        this.Query = this.QuerySelected.join()
      } else {
        this.QuerySelected = []
      }
      console.log('Query', this.Query)
      await GetJuegos(this.Query, this.tipo).then((response) => {
        response.forEach(J => {
            let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(J['imagen'])))
            J['imagen'] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+base64String)
        });
        this.currentItems = response
      })
    } else {
      this.ListarJuegos()
    }
  }
}