import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PartosComponent } from './components/partos/partos.component';
import { RecienNacidosComponent } from './components/recien-nacidos/recien-nacidos.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { SistemaComponent } from './components/sistema/sistema.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/acceso",
    pathMatch: "full"
  },
  {
    path: "acceso",
    component: AccesoComponent
  },
  {
    path:"sistema", component: SistemaComponent,
    canActivate: [],
    children: [
      {
        path: "",
        redirectTo: "/sistema/consultas",
        pathMatch: "full"
      },
      {
        path: "consultas",
        component: ConsultasComponent
      },
      {
        path: "doctores",
        component: DoctoresComponent
      },
      {
        path: "habitaciones",
        component: HabitacionesComponent
      },
      {
        path: "pacientes",
        component: PacientesComponent
      },
      {
        path: "partos",
        component: PartosComponent
      },
      {
        path: "recien-nacidos",
        component: RecienNacidosComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
