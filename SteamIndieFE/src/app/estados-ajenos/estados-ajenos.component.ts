import { Component, OnInit,Input } from '@angular/core';
import { estados } from '../../Datas/publicaciones'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-estados-ajenos',
  templateUrl: './estados-ajenos.component.html',
  styleUrls: ['./estados-ajenos.component.css']
})
export class EstadosAjenosComponent implements OnInit {
  @Input() estados
  constructor() {
    console.log(estados)
    // this.asignar()
  }

  ngOnInit(): void {
  }

  // asignar = async () => {
  //   console.log('aca')
  //   this.estados = await estados.map(function(x) {
  //     x['imagen'] = 'data:image/jpg;base64,'+ x['imagen'];
  //     return x;
  //   });
  // }
}
