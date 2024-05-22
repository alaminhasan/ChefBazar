// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4UyR37OJqfVP2WmkoJ0Zd5hVtNFkERA8",
  authDomain: "chefbazar-fb0a0.firebaseapp.com",
  projectId: "chefbazar-fb0a0",
  storageBucket: "chefbazar-fb0a0.appspot.com",
  messagingSenderId: "283213491136",
  appId: "1:283213491136:web:0eb421fd7d7ba086987625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;