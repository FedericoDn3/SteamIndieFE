import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { AgregarOferta } from '../../Servicos/Oferta'
@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css']
})
export class NuevaOfertaComponent implements OnInit {
  public Oferta = {
    nominstof: '',
    finiof: new Date(),
    ffinof: new Date(),
    porcentof: 0,
    activa: true
  };
  constructor() { }

  ngOnInit(): void {
  }

  publicar = async () => {
    await AgregarOferta(this.Oferta).then((response) => {
      let res = response
      console.log(res,"response")
    })
  }
}
