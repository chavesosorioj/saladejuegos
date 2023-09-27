import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mail: string;
  // usuario: any;
  constructor(private rutas: Router,
              private userService: UserService) {
                console.log('constructor nav');
                this.mail='';
              //  this.userService.pruebaUsuarioLogueado();
                this.usuarioLogueado();

  }

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

  usuarioLogueado(){
    console.log('usuarioLogueado');
    let us = this.userService.pruebaUsuarioLogueado();
    console.log('estoy en nav: ', us);
  }

  desloguearUsuario(){
    this.userService.logOut();
  }



}
