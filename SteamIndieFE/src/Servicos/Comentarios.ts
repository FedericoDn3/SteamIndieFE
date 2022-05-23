import axios from "axios";

const GetComentarios = async () : Promise<Object[]> => {
  var res = []
  await axios.get('http://localhost:8080/api-0.0.1-SNAPSHOT/Comentarios/Listar')
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

const AgregarComentarios = async (Juego: object) => {
  await axios.post('http://localhost:8080/api-0.0.1-SNAPSHOT/Comentarios/NuevoJuego',{
    Juego: Juego
  }).then(function (response) {
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
}

export {
    GetComentarios,
    AgregarComentarios
}