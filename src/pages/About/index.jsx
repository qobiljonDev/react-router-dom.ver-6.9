import React from 'react'
import qs from "qs"
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  
  const location = useLocation()

  console.log(location);

  return (
    <div className='container'>
      <button
      onClick={() => navigate("/")}
      >Orqaga</button>
    </div>
  )
}

export default About;
