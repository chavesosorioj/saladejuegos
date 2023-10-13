import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  user: Usuario = {
    nombre: 'juliana',
    mail: 'juli@utn.com',
    pass: 'juli01',
    uid: ''
  }

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


}



// login() {
//   console.log(this.user);
//   this.loading = true;

//   this.authService
//   .login()
//   .subscribe({
//     next: () => {
      
//       this.router.navigate(['/admin']);
//     },
//     error: (err) => {
//       console.log(err);
//       this.loading = false;
//     },
//     complete: () => {
//       this.loading = false;
//     }
//   });
// }

