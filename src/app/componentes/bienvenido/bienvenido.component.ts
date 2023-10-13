import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.routes.navigate(['login']);
  }

  register(){
    this.routes.navigate(['registro']);
  }
}
