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
import { AccesoGuard } from './guards/acceso.guard';
import { SistemaGuard } from './guards/sistema.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/acceso",
    pathMatch: "full"
  },
  {
    path: "acceso",
    component: AccesoComponent,
    canActivate: [SistemaGuard]
  },
  {
    path:"sistema", component: SistemaComponent,
    canActivate: [
      AccesoGuard
    ],
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
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
