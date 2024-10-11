import { Empleados } from './empleadosModels';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosServicios2Service } from './empleados-servicios2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  
  title = 'Agregar Usuarios';
  //servicio inyectado el servicio 
constructor(){

}
ngOnInit(): void {

}

 

}
