import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';

import { RegisterModule } from './register/register.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

import { ModalService } from './modal.service';

@NgModule({
  declarations: [
    AppComponent,
	ModalComponent,
],
imports: [
	BrowserModule,
	RegisterModule,
	RecaptchaModule.forRoot()
  ],
  providers: [
	  ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
