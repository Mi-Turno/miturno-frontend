import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ICONOS } from '../../../shared/utils/iconos.constants';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    imports: [MatIcon, CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  //inj
  iconos = ICONOS;
  rutaSalir:string = 'salir';

  //constructor

  constructor(private router: Router) {

  }


  isActive(segment: string): boolean {
    const urlSegments = this.router.url.split('/').filter(s => s);
    const lastSegment = urlSegments[urlSegments.length - 1];
    return lastSegment === segment;

  }

    navigateTo(route: string): void {
        route = "branches/" + route;
        this.router.navigate([route]);
  }



urlLogo = "#";

}
