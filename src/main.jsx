import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './searchProject/Search.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './gallery/App.jsx'
import Home from './home/Home.jsx'
import NavBar from './header/NavBar.jsx'
import Footer from './footer/Footer.jsx'
import User from './gallery/components/User.jsx'
import Login from './userform/Login.jsx'
import Register from './userform/Register.jsx'
import Agents from './agent/Agents.jsx'
import AgentDetails from './agent/AgentDetails.jsx'
import HomeInterior from './Components/HomeInterior.jsx'
import OwnerPlan from './Components/OwnerPlan.jsx'
import './index.css'
import Pq from './Components/pq/Pq.jsx'
// import ProtectedRoute from './Components/ProtectedRoute'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={
          // <ProtectedRoute>
            <User />
          // </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agents" element={<Agents/>} />
        <Route path="/agents/agent-details" element={<AgentDetails/>} />
        <Route path="/home-interior" element={<HomeInterior/>} />
        <Route path="/owner-plans" element={<OwnerPlan/>} />
        <Route path="/pq" element={<Pq/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)
