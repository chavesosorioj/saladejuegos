import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';
import { addDoc, collection, collectionData, Firestore, getDoc,
  getDocs, updateDoc, deleteDoc, doc, setDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth,
            private firestore: Firestore) { }

  getUsuario(): Observable<Usuario[]>{
    const col = collection(this.firestore, 'usuarios');
    return collectionData(col, {idField: "id"}) as Observable<Usuario[]>;
  }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email,password);
  }

  // register(email:string, pass:string):Promise<any>{
  //   return createUserWithEmailAndPassword(this.auth, email,pass);
  // }

//   public async registerUser(email:string, clave:string):Promise<any>{
//     const resultado= await this.afAuth.createUserWithEmailAndPassword(email, clave);
//     return resultado;
// }

  logIn({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  guardarUsuario(usuario: Usuario): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const col = collection(this.firestore, 'usuarios');
      addDoc(col, {
        nombre: usuario.nombre,
        mail: usuario.mail,
        contraseña: usuario.pass,
        uid: usuario.uid
      })
        .then((docRef) => {
          console.log('Usuario agregado con ID:', docRef.id);
          resolve(); 
        })
        .catch((error) => {
          console.error('Error al agregar Usuario:', error);
          reject(error); 
        });
    });
  }


  eliminarUsuario(id: string){
    const documento = doc(collection(this.firestore, 'usuarios'), id);
    deleteDoc(documento);
  }
}
