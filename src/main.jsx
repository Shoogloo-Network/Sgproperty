import 'regenerator-runtime/runtime';
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
import ErrorBoundary from './ErrorBoundary.jsx'
import ChatComponent from './chatbot/ChatComponent.jsx';
{
  console.log(import.meta.env.VITE_DETAILE_PAGE);
}

// import ProtectedRoute from './Components/ProtectedRoute'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ErrorBoundary>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path={import.meta.env.VITE_BASE_URL } element={<Home />} />
        <Route path={import.meta.env.VITE_DETAILE_PAGE} element={<App />} />
        <Route path={import.meta.env.VITE_SEARCH} element={<Search />} />
        <Route path={import.meta.env.VITE_USER} element={
          // <ProtectedRoute>
            <User />
          /* </ProtectedRoute> */
        } />
        <Route path={import.meta.env.VITE_USER_LOGIN} element={<Login />} />
        <Route path={import.meta.env.VITE_USER_SIGNIN} element={<Register />} />
        <Route path={import.meta.env.VITE_AGENTS} element={<Agents/>} />
        <Route path={import.meta.env.VITE_AGENT_DETAILS} element={<AgentDetails/>} />
        <Route path={import.meta.env.VITE_HOME_INTERIOR} element={<HomeInterior/>} />
        <Route path={import.meta.env.VITE_OWNER_PLANS} element={<OwnerPlan/>} />
        <Route path="/pq" element={<Pq/>} />
      </Routes>
      <div>
        <ChatComponent/>
      </div>
      <Footer/>
    </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
