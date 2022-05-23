import { FormControl, FormGroup } from '@angular/forms'
export class Tarjeta { 
    info = new FormGroup({
        Nombre: new FormControl(''),
        Apellido: new FormControl(''),
        Numero:new FormControl(''),
        Pin: new FormControl(''),
        Mes: new FormControl(''),
        Anio: new FormControl(''),
        Monto: new FormControl(''),
    });
}