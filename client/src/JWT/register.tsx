import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import myAxios from './axios';

const Register = () => {
  const [formData, setFormData] = useState({
      email:"", password: ""
    });
    const navigate = useNavigate();
    
    const handleChange = (e:any) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    }
    
    const handleSubmit = async () => {
      try {
        const res = await myAxios.post('/register', formData)
        console.log('res',res)
        setTimeout(()=> {
          navigate('/login')
          console.log("set time out render")
        }, 1000)
      } catch(e:any) {
        console.log(e.message)
      }
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