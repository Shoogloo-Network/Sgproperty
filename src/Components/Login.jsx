        import React, { useState } from 'react'
        import { useNavigate } from 'react-router-dom';
        import { Link } from 'react-router-dom';
        const Login = () => {
            const navigate = useNavigate();
            const [formData, setFormData] = useState({
                email: '',
                password: '',
            });
            const handleLogin = (e) => {
                e.preventDefault();
                const storedUser = localStorage.getItem('user');
                const user = JSON.parse(storedUser);

                if(user && user.email === formData.email && user.password === formData.password ){
                    localStorage.setItem("isLogin", true);
                    navigate('/');
                }else{
                    alert('Invalid email or password');
                }
            }
          return (
            <>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                <input type="password" placeholder='Password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                <button type='submit'>Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>

            </form>
            </>
          )
        }
        
        export default Login
        