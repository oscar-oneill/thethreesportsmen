import React from 'react';
import '../Body/Body.css';
import Intro from "../Intro/Intro";
import About from '../About/About';
import Scores from '../Scores/Scores';
import Footer from '../Footer/Footer';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import Contact from '../Contact/Contact';

const Body = () => {
    return (
      <div className="body__container">
        <Intro />
        <MediaPlayer />
        <About />
        <Scores />
        <Contact />
        <Footer />
      </div>
    );
}

export default Body
