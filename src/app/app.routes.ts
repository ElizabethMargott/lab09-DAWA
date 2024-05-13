import { Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path:'saludo', component: SaludoComponent },
    { path:'contador', component: ContadorComponent },
    { path:'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
