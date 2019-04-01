import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/signup'><li>Signup</li></NavLink>
        <NavLink to='/signin'><li>Login</li></NavLink>
      </ul>
    </div>
  )
}

export default SignedOutLinks