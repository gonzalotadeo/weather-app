import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../services/weather-service';
import { previsionSemana } from '../models/tiempo-prevision-semana.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tiempo-prevision-semana',
  standalone: true,
  templateUrl: './tiempo-prevision-semana.component.html',
  imports: [CommonModule],
  styleUrls: ['./tiempo-prevision-semana.component.css'],
})
export class TiempoPrevisionSemanaComponent implements OnInit {
  dias: previsionSemana[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getPrevisionSemana('Barcelona').subscribe(data => {
      this.dias = data;
    });
  }
}