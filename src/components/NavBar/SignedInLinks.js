import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SignedInLinks = (props) => {
  console.log(props.profile)
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/doSomething'>doSomething(does nothing)</NavLink></li>
        <li onClick={props.signOut}><a >Log Out</a></li>
        <li><NavLink to='/' className="btn" > Hello, {props.profile.firstName} </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { signOut: () => dispatch(signOut()) }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
