import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
    ) {
    this.activatedRoute.params.subscribe( data => {
      this.heroe = this._heroesService.getHeroe(data['id']);
    });
  }

  ngOnInit() {
  }

}
