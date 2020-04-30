import {HomeComponent} from '../app/components/home/home.component';
import {SignInComponent} from '../app/components/sign-in/sign-in.component';
import {SignUpComponent} from '../app/components/sign-up/sign-up.component'; 
import {AboutUsComponent} from '../app/components/about-us/about-us.component';
import {TermsComponent} from '../app/components/terms/terms.component';
import { SubaccountComponent } from '../app/components/subaccount/subaccount.component';
import { Routes } from '@angular/router';
import { MainDashboardComponent } from '../app/components/subaccount/main-dashboard/main-dashboard.component';
import { UserGuard } from './user.guard';

import { PeliculasComponent } from '../app/components/subaccount/peliculas/peliculas.component';
import {DocumentalesComponent} from '../app/components/subaccount/documentales/documentales.component'
import { SeriesComponent } from '../app/components/subaccount/series/series.component';
import { FavoritosComponent } from "../app/components/subaccount/favoritos/favoritos.component";
import { BuscarComponent } from '../app/components/subaccount/buscar/buscar.component';



const routes : Routes = [
    { path: '', component: HomeComponent},
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent},
    { path: 'aboutus', component: AboutUsComponent},
    { path: 'terms', component: TermsComponent},
    { path: 'subaccount', component: SubaccountComponent, canActivate:[UserGuard],
    
    children: [
  
      {path: 'main', component:MainDashboardComponent},
      {path: 'peliculas/:id', component: PeliculasComponent},
      {path: 'documentales', component: DocumentalesComponent},
      {path: 'series', component: SeriesComponent},
      {path: 'favoritos', component: FavoritosComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: '', pathMatch: 'prefix', redirectTo: 'main'}
    ]},
    
  
  ];