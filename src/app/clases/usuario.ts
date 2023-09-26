export class Usuario {

    nombre: string;
    mail: string;
    pass: string;
    uid: string;

    constructor(nombre:string, mail:string, pass:string, uid:string){
        this.nombre = nombre,
        this.mail = mail,
        this.pass = pass,
        this.uid = uid
    }
}
