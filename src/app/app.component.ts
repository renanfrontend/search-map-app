import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, FormsModule] // Adicionar módulos necessários
})
export class AppComponent {
  address: string = '';
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 15;
  showMap: boolean = false;
  additionalInfo: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  mapOptions: google.maps.MapOptions = { zoom: this.zoom };
  title: string = 'search-map-app'; // Adicionado

  constructor(private http: HttpClient) {}

  searchAddress() {
    const encodedAddress = encodeURIComponent(this.address);
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=YOUR_API_KEY`)
      .subscribe((response: any) => {
        if (response.status === 'OK') {
          this.latitude = response.results[0].geometry.location.lat;
          this.longitude = response.results[0].geometry.location.lng;
          this.additionalInfo = response.results[0];
          this.showMap = true;
        } else {
          alert('Endereço não encontrado!');
        }
      });
  }
}
