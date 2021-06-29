import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form.component';
import { InputFormRoutingModule } from './input-form-routing.module';

@NgModule({
  declarations: [
    InputFormComponent
  ],
  imports: [
    CommonModule,
    InputFormRoutingModule
  ]
})
export class InputFormModule { }
