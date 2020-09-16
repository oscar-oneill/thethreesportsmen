import React from 'react';
import ReactDOM from 'react-dom';
import './MediaPlayer.css';
import Podcast from "../MediaPlayer/TSM-001.mp3";

const MediaPlayer = () => {
    return (
        <audio className="player__audio" controls>
          <source src={Podcast} type="audio/mp3" />
        </audio>
    );
}

export default MediaPlayer
ReactDOM.render(<MediaPlayer />, document.getElementById("root"));
