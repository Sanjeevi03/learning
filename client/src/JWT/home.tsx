import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div>home

      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home