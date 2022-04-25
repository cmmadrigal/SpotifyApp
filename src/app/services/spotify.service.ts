import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service Listo");
  }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB4UW0AGZBNbYD0zMboYUcVyi1H7AmUAwP9d_NjFy1LLPvgp3doJNOFJbympBh6Qx3Dfweq5UalB3rYHW4'
    });

    return this.http.get(url, { headers });
  }
  getnewReleases(): Observable<any> {

    return this.getQuery("browse/new-releases?limit=20").pipe(map((data: any) => {
      return data.albums.items;
    }));
  }


  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }

  getArtistaa(id: string) {

    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data.artists.items));

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));

  }


}
