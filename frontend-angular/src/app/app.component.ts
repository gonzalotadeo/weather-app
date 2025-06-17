import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherHeaderComponent } from './weather-header/weather-header.component';
import { WeatherHourlyComponent } from './weather-hourly/weather-hourly.component';
import { WeatherExtraComponent } from './weather-extra/weather-extra.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherHeaderComponent, WeatherHourlyComponent, WeatherExtraComponent, WeatherForecastComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-angular';
}
