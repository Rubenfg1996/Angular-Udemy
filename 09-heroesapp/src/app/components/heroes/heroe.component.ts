import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo = false;
  id: string;
  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private routeActual: ActivatedRoute
  ) {
    this.routeActual.params.subscribe( paramaetros => {
      this.id = paramaetros['id'];
      if ( this.id !== 'nuevo') {
        this._heroesService.getHeroe(this.id).subscribe((data: Heroe) => this.heroe = data);
      }
    });
  }

  ngOnInit() {
  }

  guardar() {

    if (this.id === 'nuevo') {
      this._heroesService.nuevoHeroe(this.heroe).subscribe((data: any) => {
        this.router.navigate(['/heroe', data.name]);
      });
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

  agregarNuevo( forma: NgForm ) {
    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa: 'Marvel'
    });
  }

}
