import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'juego', component:JuegosComponent, children:[
    //{path:'tateti',component:TatetiComponent}, VER QUE OTRO CHILDEN LE PONGO
    {path:'**',component:NotFoundComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'quien-soy',component:QuienSoyComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
