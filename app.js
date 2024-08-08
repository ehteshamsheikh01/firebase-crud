import { signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


















const googleBtn = document.getElementById('btn-google');
const form = document.querySelector('form')
const email = document.querySelector('#email')
const pasword = document.querySelector('#pasword');





form.addEventListener('submit' , (event) =>{
    event.preventDefault();
signInWithEmailAndPassword(auth, email.value, pasword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  console.log(user);
  window.location = 'home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    });


    const provider = new GoogleAuthProvider();


googleBtn.addEventListener('click',()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage);
  });
})