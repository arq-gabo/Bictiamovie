import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import { AppComponent } from './app.component';
import { PagInitComponent } from './components/pag-init/pag-init.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
const appRoutes: Routes = ([
  { path: '', component: PagInitComponent},
  { path: 'signUp', component: SignUpComponent}
]);
@NgModule({
  declarations: [
    AppComponent,
    PagInitComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
