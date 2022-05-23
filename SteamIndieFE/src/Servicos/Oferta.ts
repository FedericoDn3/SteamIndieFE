import axios from "axios";
import { Moment } from 'moment'
import * as moment from 'moment';
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const AgregarOferta = async (Oferta) : Promise<boolean> => {
    let body = new URLSearchParams();
    body.append('nominstof', Oferta.nominstof);
    body.append('porcentof', Oferta.porcentof);
    body.append('finiof', moment(Oferta.finiof).format("yyyy-MM-DD"));
    body.append('ffinof', moment(Oferta.ffinof).format("yyyy-MM-DD"));
    body.append('activa', '1');
    console.log('body:', body.toString());
    await axios.post('http://localhost:8080/SteamIndieBackend/rest/servicios/ofertas/agregarOferta',body,config)
        .then(function (response) {
          return true
        })
        .catch(function (error) {
          return false
          console.log(error);
        })
        .then(function () {
        });
  return true
}
const OfertarJuego = async (Juegos, IdOferta) : Promise<boolean> => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  let body = new URLSearchParams();
  body.append('Juegos', Juegos);
  body.append('idOferta', IdOferta);
  await axios.post('http://localhost:8080/SteamIndieBackend/rest/servicios/Registro',body,config)
  .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  return false
}
// const JuegosOfertas = async (Oferta) : Promise<object[]> => {

// }
export {
  AgregarOferta,
  OfertarJuego,
}