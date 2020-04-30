import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http'
// import { HttpClientJsonModule } from '@angular/common/http'
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
import { SubaccountComponent } from './components/subaccount/subaccount.component';
import { UserService } from './services/user.service';

//guard
import { UserGuard } from './user.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MainDashboardComponent } from './components/subaccount/main-dashboard/main-dashboard.component';
import { NavBarSubaccountComponent } from './components/nav-bar-subaccount/nav-bar-subaccount.component';
import { PeliculasComponent } from './components/subaccount/peliculas/peliculas.component';
import { DocumentalesComponent } from './components/subaccount/documentales/documentales.component';
import { SeriesComponent } from './components/subaccount/series/series.component';
import { FavoritosComponent } from './components/subaccount/favoritos/favoritos.component';
import { BuscarComponent } from './components/subaccount/buscar/buscar.component';
import { LoadingComponent } from './components/subaccount/loading/loading.component';
import { CartasComponent } from './components/subaccount/cartas/cartas.component'
import { from } from 'rxjs';



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
    TermsComponent,
    SubaccountComponent,
    MainDashboardComponent,
    NavBarSubaccountComponent,
    PeliculasComponent,
    DocumentalesComponent,
    SeriesComponent,
    FavoritosComponent,
    BuscarComponent,
    LoadingComponent,
    CartasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonModule,
    RouterModule.forRoot(routes,{useHash:true}),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    UserService,
    UserGuard    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
