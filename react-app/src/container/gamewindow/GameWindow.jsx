import React from 'react'
import './gamewindow.css'

const GameWindow = () => {
  return (
  <div className="game__whatgame section__margin" id="wgame">
    <div className="game__whatgame-feature">
        <button type='button' onClick={() => window.location.href = 'R34WebGL/index.html'}>Play Game</button>
    </div>
  </div>
  )
}

export default GameWindow