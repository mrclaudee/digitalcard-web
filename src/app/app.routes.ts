import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfilComponent } from './views/profil/profil.component';
import { CarteComponent } from './views/carte/carte.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'profil', component: ProfilComponent},
    {path:'carte', component: CarteComponent},
];

