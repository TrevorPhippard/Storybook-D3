import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import styled from 'styled-components'
import classnames from 'classnames'

function bgColour(props){
  return props.theme.primary 
}

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> 
                         : <SignedOutLinks />;
  return (
    <nav className ={classnames(props.className)}>
        {links}
    </nav>
  )
}

var styledNav = styled(Navbar)`

a{
  text-decoration: none;
}
li {
  font-size: 1rem;
  display: inline-block;
  padding: 1rem;
  transition: .3s background;
  color: #ddd;

  &:hover {
    background: #fc0;
    color: #333;
  }
}
`


const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(styledNav)
