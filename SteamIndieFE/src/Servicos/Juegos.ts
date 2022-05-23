import axios from "axios";
import { Juegos } from '../Datas/products'
import { Usuarios } from '../Datas/Usuarios'
import { comentarios } from '../Datas/comentarios'
import { categorias, Tags } from "src/Datas/datas";
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const GetJuegos = async (Query = 'qwe', tipo=1) : Promise<Object[]> => {
  var res =[]
  res.push(Juegos)
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/Search/Jue/'+Query+'/'+tipo)
    .then(function (response) {
      res = response.data
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  return res
}

const ListarJuegos = async () : Promise<Object[]> => {
  var res =[]
  res.push(Juegos)
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/juegos/listarJuegos')
  .then(function (response) {
    res = response.data
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  return res
}

const GetJuego = async (Juego: string) => {
  var res = Juegos
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/juegos/buscarJuego/'+Juego)
  .then(function (response) {
        // handle success
        res = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return res
}

const GetEstados = async (id) => {
  var res = []
  console.log(id)
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/usuarios/buscarEstados/' + id)
  .then(function (response) {
        // handle success
        res = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return res
}

const GetComentarios = async (id) => {
  var res = comentarios
  console.log(id)
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/compras/listaComentCalifJuego/' + id)
  .then(function (response) {
        // handle success
        res = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return res
}

const getCategorias = async (): Promise<Object[]> => {
  var res = categorias
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/Cat')
  .then(function (response) {
        // handle success
        res = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return res
}
const getTags = async (): Promise<Object[]> => {
  var res = Tags
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/Tag')
  .then(function (response) {
        // handle success
        res = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return res
}

const constListarCompras = async (id): Promise<Object[]> => {
  var res = []
  console.log(id)
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/compras/listarComprasUsuario/'+id)
  .then(function (response) {
        // handle success
        res = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return null
      })
      .then(function () {
        // always executed
      });
  return res
}

const ComprarJuego = async (JuegoId, UsuID): Promise<boolean> => {
  console.log('asdf')
  let body = new URLSearchParams();
  body.append('IdJuego', JuegoId);
  body.append('idUsu', UsuID);
  await axios.post('http://localhost:8080/SteamIndieBackend/rest/servicios/compras/comprarJuego', body, config)
  .then(function (response) {
        // handle success
        return true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return false
      })
      .then(function () {
        // always executed
      });
  return false
}
const NuevoJuego = async (Juego) => {
  let body = new URLSearchParams();
  body.append('nomjuego', Juego.nomjuego);
  body.append('precio', Juego.precio);
  body.append('descripcion', Juego.descripcion);
  body.append('imagen', Juego.imagen);
  body.append('video', Juego.video);
  body.append('categoria', Juego.categoria);
  body.append('tags', Juego.tags);
  body.append('fechaL', Juego.fechaL);
  body.append('url', Juego.url);
  body.append('requisitos', Juego.requisitos);
  body.append('ban', Juego.ban);
  body.append('calificacion', Juego.calificacion);
  body.append('idUsu', Juego.idUsu);
  console.log('body', body.toString())
  await axios.post(' http://localhost:8080/SteamIndieBackend/rest/servicios/juegos/agregarJuego',body, config)
    .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return null
      })
      .then(function () {
      });
}

const ReportarComentario = async (id, idUsu) => {
  let body = new URLSearchParams();
  body.append('IdJuego', id);
  body.append('idUsu', idUsu);
  console.log(body.toString())
  await axios.patch('http://localhost:8080/SteamIndieBackend/rest/servicios/compras/reportarComentario',body,config)
  .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
        return false
      })
      .then(function () {
      });
  return true
}
const ReportarJuego = async (id) => {
  let body = new URLSearchParams();
  body.append('IdJuego', id);
  console.log('body', body.toString())
  await axios.post('http://localhost:8080/SteamIndieBackend/rest/servicios/juegos/reportarJuego',body,config)
  .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
        return false
      })
      .then(function () {
      });
  return true
}

const ListarJuegosOferta = async () : Promise<Object[]> => {
  var res = []
  res.push(Juegos)
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/instanciaoferta/listarJuegosEnOferta')
  .then(function (response) {
    res = response.data
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  return res
}


const CalificarJuego = async (JuegoId, UsuID, comcom, calcom) : Promise<Object> => {
  let body = new URLSearchParams();
  body.append('IdJuego', JuegoId);
  body.append('idUsu', UsuID);
  body.append('comcom', comcom);
  body.append('calcom', calcom);
  // console.log(JuegoId, UsuID, comcom, calcom)
  // console.log('body', body.toString())
  await axios.patch('http://localhost:8080/SteamIndieBackend/rest/servicios/compras/calificarComentarJuego',body,config)
  .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  return null
}
export {
  GetEstados,
  GetComentarios,
  constListarCompras,
  CalificarJuego,
  ListarJuegos,
  getTags,
  getCategorias,
  ReportarComentario,
  ReportarJuego,
  ListarJuegosOferta,
  GetJuegos,
  GetJuego,
  ComprarJuego,
  NuevoJuego
}