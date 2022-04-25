import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /*

  PARA COGER LA INFORMACION DEL POSTMAN Y TRAERLA AL HTML

   paises: any[] = [];
   constructor(private http: HttpClient) {
     this.http.get('https://restcountries.com/v3.1/lang/spa').subscribe((paisesHablanEspanol: any) => {
       this.paises = paisesHablanEspanol;
       console.log(paisesHablanEspanol);
     })
   }

   */

  nuevasCanciones: any[] = [];
  error: boolean;
  errorMessage: string = "";


  constructor(private spotify: SpotifyService) {
    this.error = false;

    this.spotify.getnewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
      }, (errorServicio) => {

        this.error = true;
        console.log(errorServicio);
        this.errorMessage = errorServicio.error.error.message;

      });

  }
}
