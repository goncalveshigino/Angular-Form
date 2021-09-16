import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

  interface Pessoa {
    nome: string;
    favoritos: Favorito[];
  }

interface Favorito{
  id: number;
  nome: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;





  constructor() { }

  ngOnInit(): void {
  }


  ValidName(): boolean {

    return this.miFormulario?.controls.nome?.invalid &&
          this.miFormulario.controls.nome?.touched
  }

  salvar() {
    console.log('Formulario Posteado')
  }

}
