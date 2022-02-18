import * as firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import {
  FIREBASE_APIKEY,
  FIREBASE_APPID,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_MEASUREMENTID,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
} from '../const'

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENTID,
}

const app = initializeApp(firebaseConfig);
console.log(app.name); 

console.log("Firebase initialized")



export default firebase