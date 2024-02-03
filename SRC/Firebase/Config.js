// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
 
const firebaseConfig = {
  apiKey: "AIzaSyBdy2rg5eUTOyEw5IrUyq0SJPMoqT2jtgQ",
  authDomain: "geekchat1-989f6.firebaseapp.com",
  projectId: "geekchat1-989f6",
  storageBucket: "geekchat1-989f6.appspot.com",
  messagingSenderId: "902234727317",
  appId: "1:902234727317:web:dbcf115e06330e946b0c9c"
};

if(!firebase.apps.length ){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}