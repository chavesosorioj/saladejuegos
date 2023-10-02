export class Usuario {
    public nombre:string='';
    public mail:string='';
    public contraseña:string='';

    constructor(nombre?: string, mail?:string, contraseña?:string){
        if(nombre)
            this.nombre=nombre;
        if(mail)
            this.mail=mail;
        if(contraseña)
        this.contraseña=contraseña
    }
}
