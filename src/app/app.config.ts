import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  // Ajout de  withHashLocation() pour pouvoir accéder aux cartes directement en ligne
  providers: [provideRouter(routes,  withHashLocation()), provideAnimationsAsync()]
};
