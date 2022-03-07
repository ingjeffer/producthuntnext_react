// import app from 'firebase/app';
// import { initializeApp, auth } from "firebase/app";
// import 'firebase/auth';
// import firebase from 'firebase/compat/app';
import {initializeApp} from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  async registrar(nombre, email, password) {
    const nuevoUsuario = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return await updateProfile(nuevoUsuario.user, {
      displayName: nombre,
    });
  }
}

const firebase = new Firebase();

export default firebase;
