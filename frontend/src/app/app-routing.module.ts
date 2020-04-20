import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LayoutInitComponent } from './components/layout-init/layout-init.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PagInitComponent } from './components/pag-init/pag-init.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutInitComponent, children: [
    {
        path: '',
        component: PagInitComponent
      },
      {
        path: 'SignUp',
        component: SignUpComponent
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
