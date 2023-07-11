import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJIZ7lnVE2itM8ykO_2RDw1_qyCd2gu4g",
  authDomain: "energia-32371.firebaseapp.com",
  projectId: "energia-32371",
  storageBucket: "energia-32371.appspot.com",
  messagingSenderId: "961002849858",
  appId: "1:961002849858:web:770899257997b250fe4fdb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};