import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator.service';
import { emailPattern, nombreApelidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.vs.nombreApelidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.vs.emailPattern )]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]]
  });



  constructor(private fb: FormBuilder,
              private vs: ValidatorService) { }
  

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
