// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgzy2w5zu6a1uDXOk97rX-Qe3r7JdXYbY",
  authDomain: "github-internshala-project.firebaseapp.com",
  projectId: "github-internshala-project",
  storageBucket: "github-internshala-project.appspot.com",
  messagingSenderId: "883745955716",
  appId: "1:883745955716:web:f0d23025f7f6d26074c7d1",
  measurementId: "G-B043P6VCSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);