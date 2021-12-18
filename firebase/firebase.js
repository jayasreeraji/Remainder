// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHEWFhQFxUAcM4L_KQw6tgHUBkQGw4Tv4",
  authDomain: "remainder-f089f.firebaseapp.com",
  projectId: "remainder-f089f",
  storageBucket: "remainder-f089f.appspot.com",
  messagingSenderId: "203523816648",
  appId: "1:203523816648:web:5724f9b897d2a10ff679fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};