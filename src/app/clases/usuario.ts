export class Usuario {

    nombre: string;
    apellido: string;
    mail: string;
    pass: string;

    constructor(nombre:string, apellido:string, mail:string, pass:string){
        this.nombre = nombre,
        this.apellido = apellido,
        this.mail = mail,
        this.pass = pass
    }
}
