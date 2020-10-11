import React from 'react';
import ReactDOM from 'react-dom';
import './MediaPlayer.css';
import Podcast from "../Media/Audio/TSM-001.mp3";
import { PlayButton, Timer, Progress } from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";

const streamUrl = Podcast;
const trackTitle = 'Episode 1: Playoff Edition with Earl & Josh';

const AWSSoundPlayer = withSoundCloudAudio((props) => {
  const { trackTitle } = props;

  return (
    <div className="player">
      <div className="player__title">
        {trackTitle}
      </div>
      <div className="player__control">
        <PlayButton {...props} /> <Timer {...props} />
      </div>

      <div>
        <Progress {...props} />
      </div>
    </div>
  );
});


class MediaPlayer extends React.Component {
  render() {
        return (
          <div className="media__container" id="episodes">
            <div className="media__header">Stream Episode 1 Now</div>
            <div className="player__body">
              <AWSSoundPlayer
                streamUrl={streamUrl}
                trackTitle={trackTitle}
                preloadType="auto"
              />
            </div>
          </div>
        );
  }
}

export default MediaPlayer
ReactDOM.render(<MediaPlayer/>, document.getElementById("root"));
