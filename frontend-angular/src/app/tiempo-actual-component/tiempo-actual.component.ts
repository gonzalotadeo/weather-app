import { Component, Input, OnInit } from '@angular/core';
import { tiempoActual } from '../models/tiempo-actual.model';
import { WeatherService} from '../services/weather-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiempo-actual',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tiempo-actual.component.html',
  styleUrls: ['./tiempo-actual.component.css']
})
export class TiempoActualComponent {
  @Input() tiempoActualData!: tiempoActual;
  @Input() ciudad: string = '';


  //diccionario para traducir las condiciones climáticas
  condicionesClimaticasTraducidas: { [key: string]: string } = {
  "Sunny": "Soleado",
  "Clear": "Despejado",
  "Partly cloudy": "Parcialmente nublado",
  "Cloudy": "Nublado",
  "Overcast": "Cubierto",
  "Mist": "Neblina",
  "Patchy rain possible": "Posible lluvia aislada",
  "Light rain": "Lluvia ligera",
  "Heavy rain": "Lluvia intensa",
  "Thunderstorm": "Tormenta eléctrica",
  "Snow": "Nieve",

};


//método para traducir la condición actual
get condicionTraducida(): string {
  const condicion = this.tiempoActualData?.condicion;
   return this.condicionesClimaticasTraducidas[condicion] || condicion;
}


//diccionario para los iconos propios(en progreso)
iconosPropios: { [key: string]: string } = {
"113": "assets/iconos/soleado.svg"


}

get icono(): string {
  const icono=this.tiempoActualData?.icono;
  return this.iconosPropios[icono] || icono;
}}
