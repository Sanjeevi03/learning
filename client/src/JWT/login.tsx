import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

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
      <h1>Login</h1>
      Email: <input className='border' type='text' name="email" value={formData.email} onChange={handleChange}/> <br />
      Password: <input className='border' type='password' name="password" value={formData.password} onChange={handleChange}/> <br />
      <button onClick={handleSubmit} className='border px-3 cursor-pointer'>Login</button> <br />

      <p><Link to="/register"><span className='text-blue-500'>Create</span></Link> new account</p>
    </div>
  )
}

export default Login