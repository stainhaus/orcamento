import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBR0OpbYUUjftdjuDOKMtTl04rIMDNae74",
  authDomain: "orcamento-57e7e.firebaseapp.com",
  projectId: "orcamento-57e7e",
  storageBucket: "orcamento-57e7e.appspot.com",
  messagingSenderId: "83929318850",
  appId: "1:83929318850:web:54b07d261b0f2d9372c25b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);