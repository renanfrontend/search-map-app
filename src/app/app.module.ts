import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { HttpClientModule, HttpClient  } from '@angular/common/http'; // Importar o HttpClientModule
import { GoogleMapsModule } from '@angular/google-maps'; // Verifique se você está usando o módulo correto para o Google Maps

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Outros componentes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    HttpClientModule, // Adicione HttpClientModule aqui
    GoogleMapsModule // Adicione o módulo do Google Maps aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
