import axios from "axios";
import { categorias,Tags } from '../Datas/datas'

const GetData = async () : Promise<Object> => {
  let ejemplo = {
    Categorias: categorias,
    Tags: Tags,
  }
  var res = []
  await axios.get('')
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
  return ejemplo
  // return res
}
export {
  GetData,
}