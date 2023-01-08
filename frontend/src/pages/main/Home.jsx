import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../images/bk.jpg"
export default function Home() {
  return (
    <div className='main-home'>
      <div className='img'> 
      <img src={img} alt="" />
      </div> 
      <div className='textHome'>
            <h1 className='home'>
                Welcome To Book Library
            </h1>
            <Link to="/register"> 
            <button className='home-btn'>
                Register
            </button>
            </Link>
        </div>
    </div>
  )
}
