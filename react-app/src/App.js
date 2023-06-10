import React from 'react'

import './app.css'

import { Features, Footer, GameWindow, Header } from './container';
import { Brand, Navbar } from './components';


const App = () => {
  return (
    <div className='App'>

      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <GameWindow />
      <Footer />
    </div>
  )
}

export default App