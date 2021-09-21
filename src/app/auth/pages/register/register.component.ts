import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  //TODO: temporal 
  nombreApelidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerStrider(control: FormControl) {
    
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }
     console.log( valor)
    return null;

  }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApelidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noPuedeSerStrider]]
  });



  constructor(private fb: FormBuilder) { }
  

  validarCampos(campo: string) {
     
    return this.miFormulario.get(campo)?.invalid
     && this.miFormulario.get(campo)?.touched
  }

  submitFor() {
    
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }

  ngOnInit(): void {
    
    this.miFormulario.reset({
      nombre: 'Goncalves Higino',
      email: 'test1@test.com',
      username: 'goncalves_higino'
    })
  }

}
