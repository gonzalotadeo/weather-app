import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  getWeeklyForecast(codigo: string) {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/weather'; // cambia según tu backend

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?city=${city}`);
  }
}
