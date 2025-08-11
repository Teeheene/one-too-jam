//firebase config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Is-Mn8myZ66KaJCWlOcHy1aBZQSKY0k",
  authDomain: "one-tooo-jam.firebaseapp.com",
  projectId: "one-tooo-jam",
  storageBucket: "one-tooo-jam.firebasestorage.app",
  messagingSenderId: "6362443124",
  appId: "1:6362443124:web:410703a788ca6d9537d021",
  measurementId: "G-0XS3ED8MGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

///dont touch that shi sa taas HAHA

