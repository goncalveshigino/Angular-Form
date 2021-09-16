import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
  
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  initForm = {
    produto: 'RXT 4080ti',
    preco: 10,
    estoque: 10
  }

  validName(): boolean {

    return this.miFormulario?.controls.produto?.invalid &&
           this. miFormulario?.controls.produto?.touched
  }

  validPrice(): boolean {
    return this.miFormulario?.controls.preco?.touched &&
           this.miFormulario?.controls.preco?.value < 0;
  }

  guardar() {
    // console.log(this.miFormulario);
    console.log('Correto');
    
    this.miFormulario.resetForm({
      preco: 0,
      estoque: 0
    });
  }

}
