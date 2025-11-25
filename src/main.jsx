import { StrictMode } from 'react'
import {ReactDOM} from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
