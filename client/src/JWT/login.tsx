import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import myAxios from './axios';

const Login = () => {

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
      const res = await myAxios.post('http://localhost:5000/login', formData)
      console.log('res', res.data)
      
      if(res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        setTimeout(() => {
          navigate('/')
        }, 1000);
      }

    } catch(e:any) {
      console.log(e.message)
    }
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