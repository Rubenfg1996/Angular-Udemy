import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBumPSpeYFEfEDbbR9G9JKeWSnuFMLUzlK5zXyZQ2bW6a-XSasCECy61-YgEJrkQnwUWIGznjwNu-F8nkc'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map(data => {
        // retornamos con map lo que nos interesa del objeto
        return data['albums'].items;
      }));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data => {
        return data['artists'].items;
      }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map(data => {
        console.log(data);
        return data['tracks'];
      }));
  }
}
