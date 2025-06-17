import { Component } from '@angular/core';
import { WeatherHeaderComponent } from '../../weather-header/weather-header.component';
import { WeatherHourlyComponent } from '../../weather-hourly/weather-hourly.component';
import { WeatherExtraComponent } from '../../weather-extra/weather-extra.component';
import { WeatherForecastComponent } from '../../weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}