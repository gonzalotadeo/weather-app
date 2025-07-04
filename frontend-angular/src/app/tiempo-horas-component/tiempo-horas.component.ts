import { Component, OnInit } from '@angular/core';
import { WeatherService, TiempoHora } from '../services/weather-service';
import { CommonModule,DatePipe } from '@angular/common';
@Component({
  selector: 'app-tiempo-horas',
  templateUrl: './tiempo-horas.component.html',

  styleUrls: ['./tiempo-horas.component.css'],
  standalone: true,
  imports: [CommonModule,DatePipe]
})
export class TiempoHorasComponent implements OnInit {
  horas: TiempoHora[] = [];

  constructor(private weatherService: WeatherService) {}

 ngOnInit():void {
    this.weatherService.getTiempoHoras('Barcelona').subscribe(data => {
      this.horas = data;
    });
  }
}