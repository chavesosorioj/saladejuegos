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

  logged: Boolean = false;
  mail!: string| null;
  constructor(private rutas: Router,
              private userService: UserService) {
 
                this.actual();

  }

  ngOnInit(): void {
  }

  inicio(){
    this.rutas.navigate(['']);
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
  chat(){
    this.rutas.navigate(['chat']);
  }

  desloguearUsuario(){
    if(this.userService.logOut()){
      console.log('desloguearse');
      this.logged = false;
      this.rutas.navigate(['']);
    }

  }

  actual(){
    let us = this.userService.usuarioActual();
    if(us !== null){
      this.logged = true;
      this.mail = us.email;
      console.log('us mail ', us.email);
    }else{
      this.logged =false;
      this.mail = '';
    }

    console.log('usuario actual: ', us);
  }

}
