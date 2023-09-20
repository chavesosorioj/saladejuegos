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

  logIn({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  guardarUsuario(usuario: Usuario){

    const col = collection(this.firestore, 'actores');

    const docRef = addDoc(col, {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        mail: usuario.mail,
        contraseña: usuario.pass
      })
      .then((docRef) => {
        console.log('Usuario agregado con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar Usuario:', error);
      });
      
  }

  eliminarUsuario(id: string){
    const documento = doc(collection(this.firestore, 'usuarios'), id);
    deleteDoc(documento);
  }
}
