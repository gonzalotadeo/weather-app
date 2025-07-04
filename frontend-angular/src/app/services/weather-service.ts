
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tiempoActual } from '../models/tiempo-actual.model';
import { tiempoHoras } from '../models/tiempo-horas.model';
import { previsionSemana } from '../models/tiempo-prevision-semana.model';

export interface TiempoHora {
  time: string;
  temp_c: number;
  temp_f: number;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'http://localhost:8080/api/weather';

  constructor(private http: HttpClient) {}

  

  getTiempoActual(ciudad: string): Observable<tiempoActual> {
  return this.http.get<tiempoActual>(`${this.baseUrl}/actual?ciudad=${ciudad}`);
}

  getTiempoHoras(ciudad: string): Observable<tiempoHoras[]> {
    return this.http.get<TiempoHora[]>(`${this.baseUrl}/horas?ciudad=${ciudad}`);
  }

  getPrevisionSemana(ciudad: string): Observable<previsionSemana[]> {
    return this.http.get<previsionSemana[]>(`${this.baseUrl}/dias?ciudad=${ciudad}`);
  }
}
