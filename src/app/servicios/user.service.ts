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

  register({mail, pass}: any){
    return createUserWithEmailAndPassword(this.auth, mail,pass);
  }

  logIn({mail, pass}: any){
    return signInWithEmailAndPassword(this.auth, mail, pass);
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
