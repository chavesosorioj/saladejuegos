import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

  ahorcado(){
    this.rutas.navigate(['juegos/ahorcado']);
  }

  mayorMenor(){
    this.rutas.navigate(['juegos/mayor-menor']);
  }

  preguntados(){
    this.rutas.navigate(['juegos/preguntados']);
  }

  propio(){
    // this.rutas.navigate(['juegos/ahorcado']);
    console.log('juego propio');
  }
}
