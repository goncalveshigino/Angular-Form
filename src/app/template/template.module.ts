import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicosComponent,
    BasicosComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
