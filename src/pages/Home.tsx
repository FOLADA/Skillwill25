import React from 'react'
import Karl from "../images/karl.png"
import Manifesto from "../images/manifesto.png"
import Flag from "../images/flag.png"
import Modern from "../images/modern.png"
import Map from "../images/map.png"

const Home: React.FC = () => {
  return (
    <div>
      <img src={Karl} alt="Karl" className="karl" />

      <h1 className="home-h1">What did he do?</h1>

      <div className="home-container">
        <div className="home-div">
          <img src={Manifesto} alt="Communist Manifesto" className="home-image" />
          <h1>Wrote "Communism Manifesto"</h1>
        </div>

        <div className="home-div">
          <h1>Made a trash, but still diabolically hyped ideology: Communism</h1>
          <img src={Flag} alt="Communism Flag" className="home-image" />
        </div>

        <div className="home-div2">
          <img src={Modern} alt="Modern" className="home-image" />
          <h1>Poisoned half of the world's population</h1>
        </div>

        <div className="home-div2">
          <h1>Indirectly made 15 countries suffer, for more than a century</h1>
          <img src={Map} alt="Map of Communist States" className="home-image" />
        </div>
      </div>
    </div>
  )
}

export default Home
