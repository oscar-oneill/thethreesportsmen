import React from 'react';
import '../Player/Player.css';
import Artwork from "./TSM-001.jpg";
// import MediaPlayer from "../MediaPlayer/MediaPlayer";

function Player() {
    return (
      <div className="player__wrap" id="episodes">
        {/* <div>
          <MediaPlayer />
        </div> */}
        <div className="player__header">Stream Episode 1 Now</div>

        <div className="player__body">
          <div className="container__player">
            <div className="player__image">
              <img src={Artwork} alt="episode-1" />
            </div>

            <div className="player__box">
              <div className="player__data">
                <div className="player__title">Episode 1: Playoff Edition</div>
                <div className="player__guests">Earl, Josh</div>
              </div>

              <div className="player__controls">
                <div className="controls__rewind">-10</div>
                <div className="controls__play"></div>
                <div className="controls__forward">+10</div>
              </div>

              <div className="player__progress"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Player
