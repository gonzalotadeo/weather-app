import { Component } from '@angular/core';
import { WeatherService } from './services/weather-service';
import { tiempoActual } from './models/tiempo-actual.model';
import { tiempoHoras } from './models/tiempo-horas.model';
import { previsionSemana } from './models/tiempo-prevision-semana.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TiempoActualComponent } from "./tiempo-actual-component/tiempo-actual.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule, TiempoActualComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ciudad: string = '';
  tiempoActualData!: tiempoActual;
  tiempoHorasData!: tiempoHoras[];
  previsionSemanaData!: previsionSemana[];

  constructor(private weatherService: WeatherService) {}

  enviarCiudad(): void {
    console.log('Método enviarCiudad() ejecutado. Ciudad:', this.ciudad);
    if (!this.ciudad) return;

    // 1. Llamada a tiempo actual
    this.weatherService.getTiempoActual(this.ciudad).subscribe((data: tiempoActual) => {
  console.log('TIEMPO ACTUAL DESDE SUBSCRIBE', data);
  this.tiempoActualData = data;
});

    // 2. Llamada a previsión por horas
    this.weatherService.getTiempoHoras(this.ciudad).subscribe((data: tiempoHoras[]) => {
      this.tiempoHorasData = data;
    });

    // 3. Llamada a previsión por días (semana)
    this.weatherService.getPrevisionSemana(this.ciudad).subscribe((data: previsionSemana[]) => {
      this.previsionSemanaData = data;
    });
  }
}
