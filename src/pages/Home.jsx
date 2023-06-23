import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const registerPage = () => {
      navigate("/register")
    }
  return (
    <div className='home'>
        <button onClick={registerPage} className='registerPage'>Register Page</button>
        <button className='searchPage'>Search Page</button>
    </div>
  )
}

export default Home