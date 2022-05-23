import { Juegos } from './products'
import { Moment } from 'moment'
import * as moment from 'moment';
export const ofertas = [
  {
    "ID":1,
    "Nombre":"Halloween",
    "finiof": moment().format("DD/MM/yyyy"),
    "ffinof":moment().format("DD/MM/yyyy"),
    "porentof":20,
    "Juegos": Juegos
  },
  {
    "ID":2,
    "Nombre":"Navidad",
    "finiof":moment().format("DD/MM/yyyy"),
    "ffinof":moment().format("DD/MM/yyyy"),
    "porentof":30,
    "Juegos": Juegos
  },
  {
    "ID":3,
    "Nombre":"Blak Friday",
    "finiof":moment().format("DD/MM/yyyy"),
    "ffinof":moment().format("DD/MM/yyyy"),
    "porentof":15,
    "Juegos": Juegos
  },
  {
    "ID":4,
    "Nombre":"Verano",
    "finiof":moment().format("DD/MM/yyyy"),
    "ffinof":moment().format("DD/MM/yyyy"),
    "porentof":25,
    "Juegos": Juegos
  },
  {
    "ID":5,
    "Nombre":"Invierno",
    "finiof":moment().format("DD/MM/yyyy"),
    "ffinof":moment().format("DD/MM/yyyy"),
    "porentof":60,
    "Juegos": Juegos
  },
  {
    "ID":6,
    "Nombre":"Año nuevo lunar",
    "finiof":moment().format("DD/MM/yyyy"),
    "ffinof":moment().format("DD/MM/yyyy"),
    "porentof":20,
    "Juegos": Juegos
  },
];
