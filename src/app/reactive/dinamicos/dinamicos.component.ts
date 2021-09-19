import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group({

    nome: ['', [Validators.minLength(3), Validators.required]]
  })

  validarCampos( campo: string) {
     return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  constructor( private fb: FormBuilder) { }

  salvar() {
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
   
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
