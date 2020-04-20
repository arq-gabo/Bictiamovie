import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PagInitComponent } from './components/pag-init/pag-init.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { from } from 'rxjs';
import { LayoutInitComponent } from './components/layout-init/layout-init.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    PagInitComponent,
    SignUpComponent,
    LayoutInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
