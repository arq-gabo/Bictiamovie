import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsComponent } from './components/terms/terms.component';

const routes : Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'terms', component: TermsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JumbotronComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    AboutUsComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
