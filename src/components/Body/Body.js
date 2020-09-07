import React from 'react';
import '../Body/Body.css';
import Blanket from "../Blanket/Blanket";
import Intro from "../Intro/Intro";
import Player from '../Player/Player';
import About from '../About/About';
import Scores from '../Scores/Scores';
import Footer from '../Footer/Footer';

function Body() {
    return (
      <div className="body__container">
        <Blanket />
        <Intro />
        <Player />
        <About />
        <Scores />
        <Footer />
      </div>
    );
}

export default Body
