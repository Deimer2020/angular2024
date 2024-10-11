import { Injectable } from '@angular/core';
import { Empleados } from './empleadosModels';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosServicios2Service {
  constructor(private alertEmpleados:ServicioEmpleadosService) {

  }
  empleado: Empleados[] = [
    new Empleados('juan', 'perez', 'ingeniero', 54664),
    new Empleados('juanes', 'fernadez', 'rectora', 54664),
    new Empleados('juanes123', 'fernadez123', 'rectora123', 54664),
  ];
    agregarEmpleadoServicio(empleados:Empleados){
      this.alertEmpleados.muestraMensaje("Agregar Persona :" + "\n" + "Nombre: " + empleados.nombre + "\n" +  "salario : " + empleados.salario)
      this.empleado.push(empleados);
    }
  
}
