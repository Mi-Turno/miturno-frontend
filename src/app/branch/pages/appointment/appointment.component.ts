import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layout/pages/sidebar/sidebar.component';
import { NavbarComponent } from "../../../layout/pages/navbar/navbar.component";

@Component({
    selector: 'app-appointment',
    imports: [SidebarComponent, NavbarComponent],
    templateUrl: './appointment.component.html',
    styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

}
