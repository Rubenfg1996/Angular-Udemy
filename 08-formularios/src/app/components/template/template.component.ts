import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos = ['Hombre', 'Mujer'];

  constructor() { }

  ngOnInit() {
  }

  guardar(form: NgForm) {
    console.log(form);
  }
}
