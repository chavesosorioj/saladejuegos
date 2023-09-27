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
  // usuario: any;
  constructor(private rutas: Router,
              private userService: UserService) {
                // this.mail='';
              //  this.userService.pruebaUsuarioLogueado();
                // this.usuarioLogueado();  
                this.actual();

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
    // console.log('usuarioLogueado');
    let us = this.userService.pruebaUsuarioLogueado();
    // console.log('estoy en nav: ', us);
  }

  desloguearUsuario(){
    // this.userService.logOut();
    if(this.userService.logOut()){
      console.log('desloguearse');
      this.logged = false;
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
