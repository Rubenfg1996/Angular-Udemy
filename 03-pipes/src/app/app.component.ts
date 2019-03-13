import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Fernando';
  nombre2 = 'fernAndo alberto heRRera jimenez';

  arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Pepe',
    apellido: 'Cuadrado',
    direccion: {
      calle: 'primera',
      numero: 2
    }
  };

  video = 'vUI6gviNvqg';

  activar = true;

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llego data'), 3500);
  });

  fecha = new Date();
}
