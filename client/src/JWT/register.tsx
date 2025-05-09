import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
      email:"", password: ""
    });
    
    const handleChange = (e:any) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    }
    
    const handleSubmit = () => {
      
    }
  
    return (
      <div>
        <h1>Register</h1>
        Email: <input className='border' type='text' name="email" value={formData.email} onChange={handleChange}/> <br />
        Password: <input className='border' type='password' name="password" value={formData.password} onChange={handleChange}/> <br />
        <button onClick={handleSubmit} className='border px-3 cursor-pointer'>Create new</button>

        <p><Link to="/login">Already have an account?<span className='text-blue-500'>Login</span></Link></p>
      </div>
    )
}

export default Register