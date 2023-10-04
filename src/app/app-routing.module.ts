import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
// import { JuegosComponent } from './page/juegos/juegos.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

const routes: Routes = [
  {path: '', component:BienvenidoComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'quien-soy',component:QuienSoyComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'juegos',
          loadChildren: () => import('./juegos/juegos.module')
          .then(m => m.JuegosModule)
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
