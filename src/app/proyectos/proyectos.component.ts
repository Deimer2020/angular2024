import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServicios2Service } from '../empleados-servicios2.service';
import { Empleados } from '../empleadosModels';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  constructor(private router: Router,private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosServicios2Service) {}
  volverHome() {
    //enlaces de rutas 
    this.router.navigate(['']);
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
this.router.navigate(['']); //aqui lo mando para el home
}
}
