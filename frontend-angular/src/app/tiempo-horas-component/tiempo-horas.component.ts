import { Component, Input, OnInit } from '@angular/core';
import { WeatherService, TiempoHora } from '../services/weather-service';
import { CommonModule,DatePipe } from '@angular/common';
import { time } from 'console';
@Component({
  selector: 'app-tiempo-horas',
  templateUrl: './tiempo-horas.component.html',

  styleUrls: ['./tiempo-horas.component.css'],
  standalone: true,
  imports: [CommonModule]
})


export class TiempoHorasComponent {
  @Input() datosHoras: any[] = [];

  acortarHora(hora:string):string{
  return hora.split(' ')[1];
}
}

