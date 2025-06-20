import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})

export class AppComponent {
  title = 'frontend-angular';
  data: any;
  ciudad: string = '';

   constructor(private http: HttpClient){}
   
   enviarCiudad(){
   const url = 'http://localhost:8080/api/weather/ciudad'; //esta función recoge el valor del textfield y lo manda al backend.
     const body = { ciudad: this.ciudad };

     this.http.post(url, body).subscribe(
    () => {
      console.log('Ciudad actualizada, obteniendo nueva previsión...');
      this.obtenerPrevision(); // Llamamos de nuevo a /forecast con la ciudad actualizada
    },
    (error) => {
      console.error('Error al enviar ciudad:', error);
    });}


   ngOnInit() {this.http.get('http://localhost:8080/api/weather/forecast') //de inicio se ejecuta esta función con llamada a la api. es de demo.
    .subscribe((response: any) => {
      this.data=response;
      console.log(this.data);
      
});


  } obtenerPrevision() { 
    const urlGet = 'http://localhost:8080/api/weather/forecast';
    this.http.get(urlGet).subscribe({
      next: (response: any) => {
        this.data = response;
        console.log('Previsión recibida:', this.data);
      },
      error: err => {
        console.error('Error al obtener la previsión:', err);
      }
    });
  }
}

