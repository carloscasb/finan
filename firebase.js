

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1uH54iOoZ3Dbac6iX4dIsZ7FbxSxYj9Q",
  authDomain: "agendanf-4e6c9.firebaseapp.com",
  databaseURL: "https://agendanf-4e6c9-default-rtdb.firebaseio.com",
  projectId: "agendanf-4e6c9",
  storageBucket: "agendanf-4e6c9.appspot.com",
  messagingSenderId: "266417443319",
  appId: "1:266417443319:web:542f9b33c2921c2e7bdef2"
};

// Initialize Firebase
const firebaseApp1 = initializeApp(firebaseConfig);
export default firebaseApp1;