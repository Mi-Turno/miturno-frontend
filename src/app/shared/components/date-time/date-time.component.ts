import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-time',
  standalone: true,            // faltaba standalone
  imports: [CommonModule],
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'] // era styleUrls, no styleUrl
})
export class DateTimeComponent implements OnInit, OnDestroy {

  actualDateTime: string = '';

  private intervalId!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // limpiar intervalo al destruirse
  }

  private updateDateTime(): void {
    const ahora = new Date();
    const dateFormatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeFormatOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
    const fecha = ahora.toLocaleDateString('es-ES', dateFormatOptions);
    const hora = ahora.toLocaleTimeString('es-ES', timeFormatOptions);
    this.actualDateTime = `${fecha} - ${hora}`;
  }
}
