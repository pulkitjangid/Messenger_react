import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJlJuM_Zxlw5j_aUgZk3p8EWzYVGoObqw",
  authDomain: "facebook-messenger-clone-7d16c.firebaseapp.com",
  projectId: "facebook-messenger-clone-7d16c",
  storageBucket: "facebook-messenger-clone-7d16c.appspot.com",
  messagingSenderId: "479882316030",
  appId: "1:479882316030:web:0d892edd22edfe1696fdaf",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

export default getFirestore();