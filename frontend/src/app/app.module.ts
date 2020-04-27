import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from "@angular/common/http";

//components  --
import { AppComponent } from "./app.component";
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { TermsComponent } from "./components/terms/terms.component";
import { SubaccountComponent } from "./components/subaccount/subaccount.component";

import { SearchComponent } from "./components/search/search.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PeliculaImagenPipe } from "./pipes/pelicula-imagen.pipe";

//guard
import { UserGuard } from "./user.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { ROUTES } from "./app.routes";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "terms", component: TermsComponent },
  {
    path: "subaccount",
    component: SubaccountComponent,
    canActivate: [UserGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    AboutUsComponent,
    TermsComponent,
    SubaccountComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    PeliculaComponent,
    TarjetasComponent,
    NavbarComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    UserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
