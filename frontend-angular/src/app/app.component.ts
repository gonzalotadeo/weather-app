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
import { TiempoHorasComponent } from "./tiempo-horas-component/tiempo-horas.component";
import { TiempoPrevisionSemanaComponent } from "./tiempo-prevision-semana-component/tiempo-prevision-semana.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule, TiempoActualComponent, TiempoHorasComponent, TiempoPrevisionSemanaComponent],
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
  this.actualizarFondo();
});

    // 2. Llamada a previsión por horas
    this.weatherService.getTiempoHoras(this.ciudad).subscribe((data: tiempoHoras[]) => {
      this.tiempoHorasData = data;
    });

    // 3. Llamada a previsión por días (semana)
    this.weatherService.getPrevisionSemana(this.ciudad).subscribe((data: previsionSemana[]) => {
      this.previsionSemanaData = data.slice(0, 7);
    });
  }

  backgroundImg: string = '';
  
  actualizarFondo():void{

    switch (this.tiempoActualData?.condicion) {
      case "Sunny": 
      this.backgroundImg =  "url('/soleado.jpg')";
      break;
    case "Clear":
      this.backgroundImg = "url('/despejado.jpg')";
      break;
      case "Patchy rain nearby":
      this.backgroundImg = "url('/lluvia.jpg')";
      break;
    case "Partly cloudy":
      this.backgroundImg = "url('/ligeras nubes.jpg')";
      break;
    case "Cloudy":
      this.backgroundImg = "url('/nublado.jpg')";
      break;
    case "Overcast":
      this.backgroundImg = "url('/nublado.jpg')";
      break;
    case "Mist":
      this.backgroundImg = "url('/niebla.jpg')";
      break;
    case "Patchy rain possible":
      this.backgroundImg = "url('/lluvia.jpg')";
      break;
    case "Light rain":
      this.backgroundImg = "url('/lluvia.jpg')";
      break;
    case "Heavy rain":
      this.backgroundImg = "url('/lluvia.jpg')";
      break;
    case "Thunderstorm":
      this.backgroundImg = "url('tormenta.jpg')";
      break;
    case "Snow":
      this.backgroundImg = "url('/nieve.jpg')";
      break;
    default:
      this.backgroundImg = "none"; 
      break;
    }
  }


  
}

