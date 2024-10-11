import { Component } from '@angular/core';
import { Empleados } from '../empleadosModels';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServicios2Service } from '../empleados-servicios2.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Agregar Usuarios';

    //servicio inyectado el servicio 
constructor(private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosServicios2Service){

}
ngOnInit(): void {
  // llamando al servicio
this.empleado=this.empleadoService.empleado;
}
empleado: Empleados[] = [];



cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


agregarEmpleado(){
  let miEmpleado= new Empleados(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
  //this.miServicio.muestraMensaje("Nombre del empleado :" + miEmpleado.nombre + miEmpleado.apellido + miEmpleado.cargo + miEmpleado.salario);
this.empleadoService.agregarEmpleadoServicio(miEmpleado);
}
}
