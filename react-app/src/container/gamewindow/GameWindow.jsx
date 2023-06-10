import React from 'react'
import Feature from '../../components/feature/Feature';
import './gamewindow.css'

const GameWindow = () => {
  return (
  <div className="game__whatgame section__margin" id="wgame">
    <div className="game__whatgame-feature">
      <Feature title="Start Playing!" text="" />
    </div>
  </div>
  )
}

export default GameWindow