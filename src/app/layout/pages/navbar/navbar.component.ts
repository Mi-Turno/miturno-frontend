import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LandingRoutingModule } from '../../../landing/landing-routing.module';
import { CommonModule } from '@angular/common';
import { DateTimeComponent } from "../../../shared/components/date-time/date-time.component";

@Component({
    selector: 'app-navbar',
    imports: [MatIcon, CommonModule,
    LandingRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule, DateTimeComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

emitirAccion(){
    console.log("click");
}

}
