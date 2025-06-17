import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-weather-extra',
  standalone: true,
  imports: [MatCard],
  template: `
    <div style="display: flex; gap: 1rem;">
      <mat-card style="flex: 1; height: 150px">Datos extra API</mat-card>
      <mat-card style="flex: 1; height: 150px">Datos extra API</mat-card>
    </div>
  `
})
export class WeatherExtraComponent {}

