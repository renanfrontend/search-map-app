import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, FormsModule, HttpClientModule]
})
export class AppComponent implements OnInit {
  address: string = '';
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 15;
  showMap: boolean = false;
  additionalInfo: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  mapOptions: google.maps.MapOptions = { zoom: this.zoom };
  title: string = 'search-map-app'; 
  isDarkMode: boolean = true; // Definir o tema escuro como padrão

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadGoogleMapsScript();
    this.applyTheme(); // Aplica o tema inicial
  }

  private loadGoogleMapsScript(): void {
    if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&async=1`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  searchAddress(): void {
    const encodedAddress = encodeURIComponent(this.address);
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${environment.googleMapsApiKey}`)
      .subscribe({
        next: (response: any) => {
          if (response.status === 'OK') {
            this.latitude = response.results[0].geometry.location.lat;
            this.longitude = response.results[0].geometry.location.lng;
            this.additionalInfo = response.results[0];
            this.showMap = true;
          } else {
            alert('Endereço não encontrado!');
          }
        },
        error: (error) => {
          console.error('Erro ao buscar o endereço', error);
          alert('Ocorreu um erro ao buscar o endereço.');
        }
      });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
