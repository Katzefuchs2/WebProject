import React from 'react'

import './app.css'

import { Blog, Features, Footer, GameWindow, Header, Possibility } from './container';
import { Article, Brand, CTA, Feature, Navbar } from './components';


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