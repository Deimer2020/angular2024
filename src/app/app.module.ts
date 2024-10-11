import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosHijoComponent } from './empleados-hijo/empleados-hijo.component';
import { EmpleadosCaracteristicaComponent } from './empleados-caracteristica/empleados-caracteristica.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosServicios2Service } from './empleados-servicios2.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';


const appRoutes:Routes=[

  { path:'', component:HomeComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesSomosComponent},
  {path:'contacto', component:ContactoComponent},
  //le mandamos el id por parametro para que reconozc el indice
  {path:'actualizar/:id',component:ActualizarComponentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosHijoComponent,
    EmpleadosCaracteristicaComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    ActualizarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServicioEmpleadosService,EmpleadosServicios2Service,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
