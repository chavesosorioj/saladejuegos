import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

  home(){
    this.rutas.navigate(['home']);
  }
  juegos(){
    this.rutas.navigate(['juegos']);
  }
  login(){
    this.rutas.navigate(['login']);
  }

  quienSoy(){
    this.rutas.navigate(['quien-soy']);
  }
  registro(){
    this.rutas.navigate(['registro']);
  }

}
