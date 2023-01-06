import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      <div>
        <form>
          <h1>
            Login
          </h1>

    <input type="email" placeholder='Enter your email' name="email"/>
    <input type="password" placeholder='Enter your password' name="password"/>
<div>
  <Link to="/dashboard">
  <button>
    login
  </button>
  </Link>
</div>
        </form>
      </div>
      </div>
  )
}
