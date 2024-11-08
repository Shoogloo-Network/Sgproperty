import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    //to store the form data
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/');
       
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        <input type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        <input type="phone" placeholder='Phone' value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
        <input type="password" placeholder='Password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
        <button type='submit'>Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
    
    </>
  )
}

export default Register
