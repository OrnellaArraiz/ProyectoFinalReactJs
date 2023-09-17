import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'
import CartProvider from './context/CartProvider.jsx';

/* Firebase poner en archivo.env*/
const firebaseConfig = {
  apiKey: "AIzaSyCWxt-Wae8rBdP3SGNC1iRlOE-KM3rv0XE",
  authDomain: "la-relojeria-2715a.firebaseapp.com",
  projectId: "la-relojeria-2715a",
  storageBucket: "la-relojeria-2715a.appspot.com",
  messagingSenderId: "648210555231",
  appId: "1:648210555231:web:10cf9feb1d81007a43d6ea"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)