import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;

  error = false;
  mensajeError: string;

  constructor(
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.error = false;
      this.newSongs = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
