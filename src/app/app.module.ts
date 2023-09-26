import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//estos estaban de antes - REVISAR
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomeComponent } from './page/home/home.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegistroComponent } from './page/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//animations
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JuegosComponent,
    PreguntadosComponent,
    NotFoundComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
