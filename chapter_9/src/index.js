import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBLTgQ5YJOP5EHHiw9giqXzbWMMUhyT0Wg",
  authDomain: "react2022b.firebaseapp.com",
  databaseURL: "https://react2022b-default-rtdb.firebaseio.com",
  projectId: "react2022b",
  storageBucket: "react2022b.appspot.com",
  messagingSenderId: "853395810250",
  appId: "1:853395810250:web:1bf5bcb7021ddf0a3fd133"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
