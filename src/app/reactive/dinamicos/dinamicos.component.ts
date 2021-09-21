import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group({

    nome: ['', [Validators.minLength(3), Validators.required]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  });

  novoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  validarCampos( campo: string) {
     return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  adicionarFavorito() {
    
    if (this.novoFavorito.invalid) { return; }

    // this.favoritosArr.push(new FormControl(this.novoFavorito.value, Validators.required)),
    this.favoritosArr.push(this.fb.control(
      this.novoFavorito.value, Validators.required
    ))
      
      this.novoFavorito.reset();
  }

  constructor(private fb: FormBuilder) { }
  
  eliminar(i: number) {
    this.favoritosArr.removeAt(i);
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
