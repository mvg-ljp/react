import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbckaqLoYcJ24rA0QIkOwXK2CMkjwrfuw",
  authDomain: "proyecto-react-lucas.firebaseapp.com",
  projectId: "proyecto-react-lucas",
  storageBucket: "proyecto-react-lucas.appspot.com",
  messagingSenderId: "709706373208",
  appId: "1:709706373208:web:725b9ed93f3b23a264922d",
  measurementId: "G-ZG7G2THSN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
