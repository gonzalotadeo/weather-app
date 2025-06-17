import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-weather-header',
  standalone:true,
  imports: [MatCard],
  template: `
    <mat-card class="weather-header">
      <h1>20°</h1>
      <h2>Lluvia intensa</h2>
      <p>max 24° min 12°</p>
    </mat-card>
  `,
  styles: [`.weather-header { background: url('/assets/bg.jpg'); color: white; padding: 1rem; }`]
})
export class WeatherHeaderComponent {}