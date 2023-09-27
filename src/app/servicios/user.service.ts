import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';
import { addDoc, collection, collectionData, Firestore, getDoc,
  getDocs, updateDoc, deleteDoc, doc, setDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth,
            private rutas: Router,
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

  usuarioActual(){
    const autenticado = getAuth();
    return autenticado.currentUser;
    // if (user !== null) 
    //   return user;
    // else 
    //   return '';

  }

  pruebaUsuarioLogueado(){
    console.log('user service');
    this.auth.onAuthStateChanged(user =>{
      console.log(user?.email)
      return user?.email;
    })
  }

  logOut(){
    this.auth.signOut();
    this.rutas.navigate(['home']);
    return true;
  }

  eliminarUsuario(id: string){
    const documento = doc(collection(this.firestore, 'usuarios'), id);
    deleteDoc(documento);
  }
}
