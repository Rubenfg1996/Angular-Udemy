import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoutes: ActivatedRoute,
    private _heoresService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe( data => {
      this.termino = data['termino'];
      this.heroes = this._heoresService.buscarHeroes(data['termino']);
    });
  }

}
