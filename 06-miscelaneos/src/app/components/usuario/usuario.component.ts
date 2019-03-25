import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private router: ActivatedRoute) {
    this.router.params.subscribe( params => {
      console.log('RUTA PADRE');
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
