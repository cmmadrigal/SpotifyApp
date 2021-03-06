import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artistas: any[] = [];


  constructor(private spotify: SpotifyService) { }


  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
      });
  }
}
