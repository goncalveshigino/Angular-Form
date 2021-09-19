import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nome   : new FormControl('RTX 4080ti'),
  //   preco  : new FormControl(1500),
  //   estoque: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({

    nome: [, [Validators.required, Validators.minLength(3)],],
    preco: [, [Validators.min(0), Validators.required] ],
    estoque: [, [Validators.min(0), Validators.required]]
    
  })

  campoValido(campo: string) {
    
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }


  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.miFormulario.reset({
      nome: 'Calças Gonçalves',
      preco: 3500,
      estoque: 5
    })
  }

   
  salvar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    
   console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }



}
