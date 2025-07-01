import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ICONOS } from '../../../shared/utils/iconos.constants';

@Component({
  selector: 'app-nav-bar-landing',
  standalone: true,
  imports: [MatIcon,],
  templateUrl: './nav-bar-landing.component.html',
  styleUrls: ['./nav-bar-landing.component.css']
})
export class NavBarLandingComponent {
   iconos = ICONOS;

  urlBase: string = "landing-page/";
  urlIcono: string = "icono.png";
  loginHref: string = "login";

  constructor(private router: Router) {}

navegar(sectionId: string): void {
  this.deslizar(sectionId);
}

private deslizar(sectionId: string, intentos: number = 0): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (intentos < 20) {
    setTimeout(() => this.deslizar(sectionId, intentos + 1), 50);
  }
}

}
