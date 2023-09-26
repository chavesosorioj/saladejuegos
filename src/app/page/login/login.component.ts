import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ShareModule } from 'src/app/share/share.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  clave = '';
  formLogin: FormGroup;

  constructor(
    private ruteo:Router,
    private userService: UserService
    ){
      this.formLogin = new FormGroup({
        mail: new FormControl(),
        pass: new FormControl()
      })
     }

  ngOnInit(): void {
  }

  submitLogin(){
    console.log(this.formLogin.value);
    this.userService.logIn(this.formLogin.value)
    .then(response =>{
      console.log(response);
      this.ruteo.navigate(['/home']);
    })
    .catch(error => console.log(error))
  }
}

