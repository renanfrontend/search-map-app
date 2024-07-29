import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

(window as any).__env__ = window.__env__ || {};
(window as any).__env__.googleMapsApiKey = environment.googleMapsApiKey;
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
