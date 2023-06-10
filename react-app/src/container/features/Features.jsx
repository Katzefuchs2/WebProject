import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'

const featuresData = [
  {
    title: 'Free to play',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper felis finibus nunc ornare, malesuada tincidunt risus vehicula. Aliquam erat.',
  },
  {
    title: 'Fun drinking rules',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Categorized decks with many tags',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eu sem eu dictum. Nunc vitae libero ac nulla ullamcorper placerat. Maecenas ac consectetur tortor. Curabitur.',
  },
  {
    title: 'New updates constantly!',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Features = () => {
  return (
  <div className="game__features section__padding" id="features">
    <div className="game__features-heading">
      <h1 className="gradient__text">R34 Features:</h1>
      <p>Our game offers a wide range of exciting features:</p>
    </div>
    <div className="game__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features