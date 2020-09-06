import React from 'react';
import '../Body/Body.css';
import Player from '../Player/Player';
import About from '../About/About';
import Blanket from '../Blanket/Blanket';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';

function Body() {
    return (
      <div className="body__container">
        <Blanket />
        <Intro />
        <Player />
        <About />
        <Footer />
      </div>
    );
}

export default Body
