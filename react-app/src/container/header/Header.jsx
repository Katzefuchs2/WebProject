import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/R34GamePage.png';
import './header.css'

const Header = () => {
  return (
  <div className="game__header section__padding" id="home">
    <div className="game__header-content">
      <h1 className="gradient__text">R34, A Fun Drinking Game</h1>
      <p>An drinking game revolved around guessing the popularity of online tags!</p>

      <div className="game__header-content__input">
        <input type="email" placeholder="Your Email Address" />
          <button type="button" onClick={() => window.location.href = 'Backend/login.php'}>Get Started</button>
      </div>

      <div className="game__header-content__people">
        <img src={people} alt="People" />
        <p>1.600 new people have joined in on the fun in last 24 hours</p>
      </div>
    </div>

    <div className="game__header-image">
      <img src={ai} alt="AI" />
    </div>
  </div>
  )
}

export default Header