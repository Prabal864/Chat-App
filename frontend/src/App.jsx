import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import { RegistrationForm } from './pages/registration/Registration'
import {Toaster} from "react-hot-toast";
import { useAuthContext } from './context/AuthContext'
import Dashboard from './pages/dashboard/Dashboard'
import { LoginForm } from './pages/login/LoginForm'

function App() {
  const {authUser} = useAuthContext();
  return(
    <>
    <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={authUser ? <Navigate to="/home" /> : <RegistrationForm />} />
        <Route path="/login" element={authUser ? <Navigate to="/home" /> : <LoginForm/>} />
        {/* Protected Routes */}
        <Route path="/home" element={authUser ? <Home /> : <Navigate to="/" />} />
        {/* Fallback Route */}
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    <Toaster/>
    </>
  )
}

export default App;
