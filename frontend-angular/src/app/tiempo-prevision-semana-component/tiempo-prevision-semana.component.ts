import { Component, Input, OnInit } from '@angular/core';
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
export class TiempoPrevisionSemanaComponent  {
  @Input() dias: previsionSemana[] = [];
  condicion: any;

  constructor(private weatherService: WeatherService) {}


  
    //diccionario para traducir las condiciones climáticas
    condicionesClimaticasTraducidas: { [key: string]: string } = {
    "Sunny": "Soleado",
    "Clear": "Despejado",
    "Partly cloudy": "Parcialmente nublado",
    "Patchy rain nearby": "Lluvia irregular",
    "Cloudy": "Nublado",
    "Overcast": "Cubierto",
    "Mist": "Neblina",
    "Patchy rain possible": "Posible lluvia aislada",
    "Light rain": "Lluvia ligera",
    "Heavy rain": "Lluvia intensa",
    "Thunderstorm": "Tormenta eléctrica",
    "Snow": "Nieve",
  
  };
  
  //método para traducir la condición.
  traducirCondicion(condicion: string): string {
  return this.condicionesClimaticasTraducidas[condicion] || condicion;
}
}
