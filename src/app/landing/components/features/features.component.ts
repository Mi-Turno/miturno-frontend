import { Component } from '@angular/core';
import { ICONOS } from '../../../shared/utils/iconos.constants';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
iconos = ICONOS;
}
