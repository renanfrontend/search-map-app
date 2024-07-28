import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { HttpClientModule } from '@angular/common/http'; // Importar o HttpClientModule
import { GoogleMapsModule } from '@angular/google-maps'; // Módulo correto para o Google Maps

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Corrigido para HttpClientModule
    GoogleMapsModule // Módulo do Google Maps
  ],
  providers: [],
  // Remover AppComponent de declarations se estiver usando standalone
  // declarations: [AppComponent], // Não necessário para standalone
  // Mantenha bootstrap se for necessário para outros módulos
})
export class AppModule { }
