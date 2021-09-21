import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  router: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li {
      cursor:pointer
    }
    `
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


  validatorMenu: MenuItem[] = [

    {
      text: 'Register',
      router: './auth/register'
    },
    
    {
      text: 'Login',
      router: './auth/login'
    }

  ];




}
