import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;

  loading = true;

  constructor(
    private _heroesService: HeroesService
  ) {
    this._heroesService.getHeroes().subscribe( data => {
      this.heroes = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }


  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe( res => {
      if (res) {
        console.error(res);
      } else {
        delete this.heroes[key$];
      }
    });
  }
}
