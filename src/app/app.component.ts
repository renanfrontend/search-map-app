export class AppComponent {
  address: string = '';
  latitude: number = 0; // Inicialize com um valor padrão
  longitude: number = 0; // Inicialize com um valor padrão
  zoom: number = 15;
  showMap: boolean = false;
  additionalInfo: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  mapOptions: google.maps.MapOptions = { zoom: this.zoom };

  constructor(private http: HttpClient) {}

  searchAddress() {
    const encodedAddress = encodeURIComponent(this.address);
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA1dX52weX46q1yDQototW8QnFxgt1Cdac`)
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
