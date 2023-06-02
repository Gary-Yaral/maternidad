import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent {
  constructor(
    private router: Router
  ){}
  salir() {
    this.router.navigate(["/acceso"])
  }
}
