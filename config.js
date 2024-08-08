import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {  getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  import { getFirestore} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC2EFdlFiPkt5ObCH3RrDXN1Xsg38KEuec",
    authDomain: "socialapp-a27df.firebaseapp.com",
    projectId: "socialapp-a27df",
    storageBucket: "socialapp-a27df.appspot.com",
    messagingSenderId: "456691487958",
    appId: "1:456691487958:web:0fb08f652a871af7da2577",
    measurementId: "G-6S27RQ6VJH"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);