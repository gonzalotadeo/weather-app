import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs);


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es' }
  ]
});