import { UserService } from './services/user.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { HttpClientModule, HttpClientJsonpModule,  HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { InicioComponent } from './inicio/inicio.component';
import { SliderComponent } from './components/slider/slider.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { FavoritosComponent } from './components/favoritos/favoritos.component'; //servicios
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    PeliculaComponent,
    TarjetasComponent,
    NavbarComponent,
    PeliculaImagenPipe,
    InicioComponent,
    SliderComponent,
    RegistroComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
