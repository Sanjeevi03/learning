import { useEffect } from 'react'
import myAxios from './axios'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}:any) => {

  const navigate = useNavigate()

  useEffect(() => {
    (async() => {
      try {
        const check = await myAxios.get('/protected')
        if(check.status !== 200) {
            navigate('/login')
          localStorage.clear()
        }
      } catch(e) {
        navigate('/login')
        localStorage.clear()
      }
    })()
  },[navigate])

  return (
    <div>
      {children}
    </div>
  )
}

export default Protected