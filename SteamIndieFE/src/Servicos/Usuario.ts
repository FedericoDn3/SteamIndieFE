import { Usuarios } from '../Datas/Usuarios'
import axios from "axios";
import { User } from '../Datas/User'
import { estados } from 'src/Datas/publicaciones';
const UsuarioLog = async (usuario, pass) : Promise<String[]> => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  var token="2%27Vendedor%27380.00%27Macaxor%2754q56D4af984eas8f4a65wef4we684f6we4fd68ew4ef8";
  let body = new URLSearchParams();
  body.append('Nick', usuario);
  body.append('Pass', pass);
  await axios.post('http://localhost:8080/SteamIndieBackend/rest/servicios/Login',body,config)
  .then(function (response) {
    token = response.data;
    localStorage.setItem('token', token)
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  let res = token.split('%27')
  return res;
}

const islog = async () : Promise<string[]> => {
  let token = localStorage.getItem('token')
  if (token) {
    return token.split('%27')
  }
  else return null
}

const registrarUsu = async (Usu) : Promise<boolean> => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  let body = new URLSearchParams();
  body.append('Nom', Usu.Nom);
  body.append('Apell', Usu.Apell);
  body.append('Fnac', Usu.Fnac);
  body.append('Img', Usu.Img);
  body.append('Nick', Usu.Nick);
  body.append('Email', Usu.Email);
  body.append('Pass', Usu.Pass);
  body.append('Pass2', Usu.Pass2);
  body.append('Sexo', Usu.Sexo);
  body.append('Rol', Usu.Rol);
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

const GetPerfil = async (ID): Promise<Object> => {
  var res = User
  let token = localStorage.getItem('token')
  if (token) {
    ID = token.split('%27')[0]
  }
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/usuarios/buscarUsuario/'+ID)
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

const GetEstados = async (id) => {
  var res = estados
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

const GetPerfilAjeno = async (Id): Promise<Object> => {
  let res = null
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/usuarios/buscarUsuario/' + Id)
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

const Buscar = async (Query): Promise<Object[]> => {
  let res = null
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/Search/Usu/' + Query)
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

const Listar = async (): Promise<Object[]> => {
  let res = null
  await axios.get('http://localhost:8080/SteamIndieBackend/rest/servicios/usuarios/listarUsuarios')
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

const LogOutUsu = async () : Promise<boolean> => {
    var token = 'token'
    localStorage.removeItem('token')
    return true
}

const getUserLog = async () : Promise<Object[]> => {
  var token = localStorage.getItem('token')
  if (token) {
    return token.split('&27')
  }
  return null
}

const LogUsu = async () : Promise<boolean> => {
    var token = 'token'
    localStorage.setItem('token', token)
    return true
}

const NuevoEstado = async (Estado) : Promise<boolean> => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let body = new URLSearchParams();
  body.append('idUsu', Estado.idUsu);
  body.append('festado', Estado.festado);
  body.append('imgestado', Estado.imgestado);
  body.append('comestado', Estado.comestado);
  // console.log(JuegoId, UsuID, comcom, calcom)
  // console.log('body', body.toString())
  console.log('body', body.toString())
  await axios.post('http://localhost:8080/SteamIndieBackend/rest/servicios/estados/agregarEstado',body,config)
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
    NuevoEstado,
    getUserLog,
    GetPerfilAjeno,
    GetPerfil,
    UsuarioLog,
    registrarUsu,
    LogUsu,
    LogOutUsu,
    islog,
    GetEstados,
    Listar,
    Buscar
}