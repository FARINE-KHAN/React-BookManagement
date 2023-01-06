import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div>
            <h1>
                Welcome To Book Library
            </h1>
        </div>
        <div>
            <Link to="/register"> 
            <button>
                Register
            </button>
            </Link>
        </div>
    </div>
  )
}
