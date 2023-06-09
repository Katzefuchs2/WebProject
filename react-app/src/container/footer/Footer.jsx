import React from 'react'
import gameLogo from '../../assets/Rule34Logo.png';
import './footer.css'

const Footer = () => {
  return (
  <div className="game__footer section__padding" id="footer">
    <div className="game__footer-heading">
      <h1 className="gradient__text">Interested In Becoming A Playtester, Click Below!</h1>
    </div>

    <div className="game__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="game__footer-links">
      <div className="game__footer-links_logo">
        <img src={gameLogo} alt="game_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="game__footer-links_div">
        <h4>Links</h4>
        <p>Discord</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="game__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="game__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="game__footer-copyright">
      <p>@2023 R34. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer