import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nome   : new FormControl('RTX 4080ti'),
  //   preco  : new FormControl(1500),
  //   estoque: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nome: ['RTC 4080ti'],
    preco: [0],
    estoque: [0]
  })

  constructor( private fb: FormBuilder) { }

 

}
