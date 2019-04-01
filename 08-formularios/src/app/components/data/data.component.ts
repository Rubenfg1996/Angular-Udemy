import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { reject } from 'q';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form: FormGroup;

  usuario = {
    nombreCompleto: {
      nombre: 'Fernando',
      apellido: 'Alonso'
    },
    email: 'fernando@gmail.com',
    pasatiempos: ['Correr']
  };

  constructor() {

    this.form = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, this.noHerrera])
      }),
      'email': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                   ]),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    // this.form.setValue(this.usuario);

    this.form.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.form)
    ]);
    // LANZA FUNCION AL CAMBIAR EL VALOR DE CUALQUIER CAMBIO
    // this.form.valueChanges.subscribe(data => {
    //   console.log(data);
    // });

    // LANZA FUNCION AL CAMBIAR EL VALOR DEL CAMPO
    // this.form.controls['username'].valueChanges.subscribe(data => {
    //   console.log(data);
    // });

    this.form.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.form.value);

    // this.form.reset({
    //   nombreCompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   email: ''
    // });
  }

  agregarPasatiempo() {
    console.log(this.form);
    (<FormArray>this.form.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  noHerrera( control: FormControl ) {
    if (control.value === 'herrera' ) {
      return {
        noHerrera: true
      };
    }

    return null;
  }

  existeUsuario( control: FormControl ) {
    const promesa = new Promise(
      (resolve) => {
        setTimeout(() => {
          if (control.value === 'strider') {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );

    return promesa;
  }

  noIgual( control: FormControl ) {

    console.log(this);
    // tslint:disable-next-line:prefer-const
    let form: any = this;
    // this es el formulario
    if (control.value !== form.controls['password1'].value ) {
      return {
        noiguales: true
      };
    }

    return null;
  }
}
