import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empleados-caracteristica',
  templateUrl: './empleados-caracteristica.component.html',
  styleUrl: './empleados-caracteristica.component.css'
})
export class EmpleadosCaracteristicaComponent {
  @Output() caracteristicaEmpleados = new EventEmitter<string>();

  agregaCaracterticas(value: string) {
    this.caracteristicaEmpleados.emit(value);
  }
}
