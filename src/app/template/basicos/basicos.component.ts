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


  validName(): boolean {

    return this.miFormulario?.controls.produto?.invalid &&
           this. miFormulario?.controls.produto?.touched
  }

  validPrice(): boolean {
    return this.miFormulario?.controls.preco?.touched &&
           this.miFormulario?.controls.preco?.value < 0;
  }

  guardar() {
    console.log(this.miFormulario);
  }

}
