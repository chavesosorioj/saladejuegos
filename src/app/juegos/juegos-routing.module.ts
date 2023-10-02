import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

const routes: Routes = [
  {path: 'ahorcado', component:AhorcadoComponent},
  {path: 'mayor-menor', component:MayorMenorComponent},
  {path: 'preguntados', component:PreguntadosComponent}
]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
