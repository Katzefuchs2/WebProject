import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Rule34Logo.png'
import './navbar.css'


const Menu = () => (
  <>
    <p><a href='#home'> Home </a></p>
    <p><a href='#features'> Features </a></p>
    <p><a href='#wgame'> The Game </a></p>
    <p><a href='#footer'> FAQ </a></p>
  </>
)


const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className='game__navbar'>
      <div className='game__navbar-links'>
        <div className='game__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='game__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='game__navbar-sign'>
        <p>Sign in</p>
        <button type='button' onClick={() => window.location.href = 'Backend/login.php'}>Sign up</button>
      </div>
      <div className="game__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="game__navbar-menu_container scale-up-center">
          <div className="game__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="game__navbar-menu_container-links-sign" >
            <p>Sign in</p>
            <button type="button" onClick={() => window.location.href = 'Backend/login.php'}>Sign up</button>
          </div>
        </div>
        )}
      </div>      
    </div>
  )
}

export default Navbar