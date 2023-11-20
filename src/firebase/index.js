import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


/**
 * É necessário obter as credenciais criando um projeot pelo Firebase Console
 */
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};