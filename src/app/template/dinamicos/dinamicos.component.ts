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
export class DinamicosComponent  {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  novoJogo: string = '';

  pessoa: Pessoa = {
    nome: 'Gonçalves',
    favoritos: [
      { id: 1, nome: 'Fifa 2021' },
      { id: 2, nome: 'DeathStranding'}
    ]
 }

  ValidName(): boolean {

    return this.miFormulario?.controls.nome?.invalid &&
          this.miFormulario.controls.nome?.touched
  }

  salvar() {
    console.log('Formulario Posteado')
  }

  addJogo() {
    const novoFavorito: Favorito = {
      id: this.pessoa.favoritos.length + 1,
      nome: this.novoJogo
    }

    this.pessoa.favoritos.push({...novoFavorito});
    this.novoJogo = '';
  }

  eliminar(index: number) {
    this.pessoa.favoritos.splice(index, 1);
  }

}
