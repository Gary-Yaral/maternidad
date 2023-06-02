import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { PartosComponent } from './components/partos/partos.component';
import { RecienNacidosComponent } from './components/recien-nacidos/recien-nacidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SistemaComponent } from './components/sistema/sistema.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    PacientesComponent,
    DoctoresComponent,
    ConsultasComponent,
    HabitacionesComponent,
    PartosComponent,
    RecienNacidosComponent,
    SistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
