import { Component, Input, input } from '@angular/core';
import { Empleados } from '../empleadosModels';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleados-hijo',
  templateUrl: './empleados-hijo.component.html',
  styleUrl: './empleados-hijo.component.css'
})
export class EmpleadosHijoComponent {
@Input() empleadoDeLista: Empleados;
@Input() indice: number;
constructor(private miServicioCarac:ServicioEmpleadosService){

}

arraysCaracteristica = [''];

agregarCarac(nuevaCara: string) {
  this.miServicioCarac.muestraMensaje("Agregar nueva caracteristica " + nuevaCara)
  this.arraysCaracteristica.push(nuevaCara);
}
}
