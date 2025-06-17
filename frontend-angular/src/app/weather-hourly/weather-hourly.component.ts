import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor in standalone components
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-hourly',
  standalone: true, // <--- Add this if it's a standalone component
  imports: [
    CommonModule, // Required for *ngFor
    MatCardModule,
    MatIconModule
  ],
  template: `
    <mat-card>
      <div style="display: flex; overflow-x: auto">
        <div *ngFor="let hour of [13,14,15,16,17,18,19,20,21]" style="min-width: 80px; text-align: center">
          <div>24°</div>
          <mat-icon>water_drop</mat-icon>
          <div>{{hour}}:00</div>
        </div>
      </div>
    </mat-card>
  `,
  styleUrls: [] // You can add a styleUrls array if you have a separate CSS file
})
export class WeatherHourlyComponent {}