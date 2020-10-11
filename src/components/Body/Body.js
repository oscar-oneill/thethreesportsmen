import React from 'react';
import '../Body/Body.css';
import Blanket from "../Blanket/Blanket";
import Intro from "../Intro/Intro";
import About from '../About/About';
import Scores from '../Scores/Scores';
import Footer from '../Footer/Footer';
import MediaPlayer from '../MediaPlayer/MediaPlayer';

const Body = () => {
    return (
      <div className="body__container">
        <Blanket />
        <Intro />
        <MediaPlayer />
        <About />
        <Scores />
        <Footer />
      </div>
    );
}

export default Body
