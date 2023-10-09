import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private ruteo:Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){
      this.formLogin = this.formBuilder.group({
        mail: ['',[ Validators.required, Validators.email]],
        pass: ['',[ Validators.required, Validators.minLength(6)]],
      });
  }

  ngOnInit(): void {
  }

  submitLogin(){
    console.log(this.formLogin.value);
    this.userService.logIn(this.formLogin.value)
    .then(response =>{
      console.log(response);
      this.toastr.success('Usuario logueado con exito', 'Logged');
      this.ruteo.navigate(['/home']);
    })
    .catch(error => {
      console.log(error);
      this.toastr.error(this.userService.authError(error.code), 'Error');
      this.formLogin.reset();
    });
  }

  autocomplete(){
    const mail = 'juli@utn.com';
    const cont = 'juli01';
    this.formLogin.patchValue({
      mail: mail,
      pass: cont
    });
  }
}

