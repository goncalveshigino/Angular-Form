import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

  pessoa = {
    genero: 'M',
    notificaciones: false,
  }

  termosCondicoes: boolean = false;

}
