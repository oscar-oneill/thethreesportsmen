import React from 'react';
import './AudioPlayer.css';
import Podcast from "./media/TSM-001.mp3";


const AudioPlayer = function() {
    return (
        <audio className="player__audio" controls>
          <source src={Podcast} type="audio/mp3" />
        </audio>
    );
}

export default AudioPlayer
