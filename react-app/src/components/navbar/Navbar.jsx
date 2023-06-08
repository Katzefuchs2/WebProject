import React from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='game__navbar'>
      <div className='game__navbar-links'>
        
        <div className='game__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='game__navbar-links_container'>
          <p><a href='#home'> Home </a></p>
          <p><a href='#htp'> How to play? </a></p>
          <p><a href='#wrule34'> What is Rule34? </a></p>
          <p><a href='#faq'> FAQ </a></p>
        </div>
      </div>

      <div className='game__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      
    </div>
  )
}

export default Navbar