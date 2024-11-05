import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './Components/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<App />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
