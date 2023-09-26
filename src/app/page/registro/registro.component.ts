import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  datosUsuario: any|Usuario;
  formReg: FormGroup;

  constructor(
            private userService: UserService,
            private router: Router,
            private formBuilder: FormBuilder,
            private toastr: ToastrService) {
    this.formReg = this.formBuilder.group({
      nombre: ['',[ Validators.required, Validators.minLength(4)]],
      apellido: ['',[ Validators.required, Validators.minLength(4)]],
      mail: ['',[ Validators.required, Validators.email]],
      pass: ['',[ Validators.required, Validators.minLength(4)]],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formReg.value);
    const datosUsuario = new Usuario(
      this.formReg.get('nombre')?.value,
      this.formReg.get('apellido')?.value,
      this.formReg.get('mail')?.value,
      this.formReg.get('pass')?.value,
    );
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log('GUARDADO CON EXITO');
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error =>console.log(error))
    // this.userService.register(datosUsuario.mail, datosUsuario.pass)
    // .then(() => {
    //   console.log('GUARDADO CON EXITO');
    //   this.toastr.success('Usuario guardado con exito', 'Guardado');
    //   this.router.navigate(['/home']);
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    // this.userService.guardarUsuario(datosUsuario)
    // .then(() => {
    //   this.toastr.success('Usuario guardado con exito', 'Guardado');
    //   this.router.navigate(['/home']);
    // })
    // .catch(error => {
    //   console.log(error);
    // });


  }
}
