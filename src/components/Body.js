import React from 'react';
import '../components/Body.css';
import Intro from "../components/Intro";
import About from '../components/About';
import Scores from '../components/Scores';
import Footer from '../components/Footer';
import MediaPlayer from '../components/MediaPlayer';
import Contact from '../components/Contact';

const Body = () => {
    return (
      <div className="body__container">
        <Intro/>
        <MediaPlayer />
        <About />
        <Scores />
        <Contact />
        <Footer />
      </div>
    );
}

export default Body
