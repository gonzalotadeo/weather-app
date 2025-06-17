import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { TiempoFuturoDTO } from '../models/tiempo-futuro.dto'; // ajusta la ruta si tienes el modelo

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {
  public location: string = '';
  public prediccionSemanal: TiempoFuturoDTO[] = [];

  constructor(private weatherService: WeatherService) {}



  municipios = [
  { nombre: 'Madrid', codigo: '28079' },
  { nombre: 'Barcelona', codigo: '08019' },
  { nombre: 'Valencia', codigo: '46250' },
  { nombre: 'Sevilla', codigo: '41091' },
];
this.http.get(`/api/tiempo/futuro/${municipioSeleccionado.codigo}`).subscribe(...)
  public municipioSeleccionado: { nombre: string, codigo: string } | null = null;

consultarClima() {
  if (!this.municipioSeleccionado) {
    console.error('Selecciona un municipio válido');
    return;
  }

  const codigo = this.municipioSeleccionado.codigo;

  this.weatherService.getWeeklyForecast(codigo).subscribe({
    next: (data) => {
      console.log('Predicción semanal:', data);
      this.prediccionSemanal = data;
    },
    error: (error) => {
      console.error('Error del backend:', error);
    }
  });
}
}
