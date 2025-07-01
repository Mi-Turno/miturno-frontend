import { Component } from '@angular/core';
import { ICONOS } from '../../../shared/utils/iconos.constants';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-benefits',
  imports: [MatIcon],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
iconos = ICONOS;
}
