import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth, db } from "./config.js";


import {  collection , addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


// import { getfirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";




const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const ul = document.querySelector("#ul");

let arr = []


async function getData() {
  const querySnapshot = await getDocs (collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id}=> ${doc.data()}`);
    arr.push({...doc.id,id:doc.data()})
  });
  rendertodo();
}

getData();


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.Location = 'index.html'
  }
});

const logout = document.querySelector('#logout-btn');

logout.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('logout  suuccesfully');
    window.location = 'index.html'
  }).catch((error) => {
    console.log(error);
  });
})


form.addEventListener("submit" , async (event)=>{
  event.preventDefault();
console.log(todo.value);

let obj ={
  todo:todo.value
  }



try {
  const docRef = await addDoc(collection(db, "todos"),obj);
  console.log("Document written with ID:" , docReF.id);
  
arr.push(obj)
rendertodo();
} catch (e){
  console.error("error  adding document:" , e);
  
}



})
function rendertodo(){
  ul.innerHTML = " ";

arr.map((item)=>[
  ul.innerHTML+=`<li>${item.todo}<button class ="editLi">Edit<button/><button class="deleteLi">Delete<button/><li/>`
])

const editLi = document.querySelector(".editLi")
editLi.forEach((item,index)=>{
  item.addEventListener('click' , ()=>{
    const editNewvalue = prompt('Enter new todo');
    let obj = {
      todo : editNewvalue
    }
    arr.splice(index,1,obj);
    rendertodo();
  })
});


const deleteLi = document.querySelector(".deleteLi")
  deleteLi.forEach((item,index)=>{
    item.addEventListener('click' , ()=>{
      arr.splice(index,1,);
      rendertodo();
    })
})
}











