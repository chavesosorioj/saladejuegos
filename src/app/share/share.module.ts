import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { NavComponent } from './nav/nav.component'; 
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports:[
    FooterComponent,
    NavComponent
  ]
})
export class ShareModule { }
