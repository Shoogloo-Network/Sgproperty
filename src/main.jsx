import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './Components/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import User from './Components/User'
import Login from './Components/Login'
import Register from './Components/Register'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
