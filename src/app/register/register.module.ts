import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
	CommonModule,
	RecaptchaModule
  ],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
})
export class RegisterModule { }
