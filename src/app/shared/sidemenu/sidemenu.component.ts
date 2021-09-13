import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  router: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent  {

  templateMenu: MenuItem[] = [


   {
      text: 'Básicos',
      router: './template/basicos'
    },
   {
      text: 'Dinamicos',
      router: './template/dinamicos'
    }, 
   {
      text: 'Switches',
      router: './template/switches'
    },
   

  ];


  reactiveMenu: MenuItem[] = [


   {
      text: 'Básicos',
      router: './reactive/basicos'
    },
   {
      text: 'Dinamicos',
      router: './reactive/dinamicos'
    }, 
   {
      text: 'Switches',
      router: './reactive/switches'
    },
   

  ];




}
