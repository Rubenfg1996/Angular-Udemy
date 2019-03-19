import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist: any = {};
  topTracks: any = [];
  loadingArtist: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService) {
      this.loadingArtist = true;
      this.router.params.subscribe( params => {
        this.getArtist(params['id']);
        this.getTopTracks(params['id']);
      });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe( artist => {
      this.artist = artist;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
    });
  }

}
