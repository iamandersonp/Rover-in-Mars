import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form.component';
import { InputFormRoutingModule } from './input-form-routing.module';
import { AngularMaterialModule } from '../../../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module'
import { NgxCaptchaModule } from 'ngx-captcha';
@NgModule({
  declarations: [
    InputFormComponent
  ],
  imports: [
		AngularMaterialModule,
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    InputFormRoutingModule,
    CoreModule,
    NgxCaptchaModule
  ]
})
export class InputFormModule { }
