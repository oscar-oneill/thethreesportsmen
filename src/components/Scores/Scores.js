import React from 'react';
import '../Scores/Scores.css';
import Basketball from '../Basketball/Basketball';
import Football from '../Football/Football';
import Baseball from '../Baseball/Baseball';

function Scores() {
          return (
              <div className="scores__wrap">
                  <div className="scores__header" id="scores">
                      Scores
                  </div>
                  <div className="scores__body">
                    <Basketball/>
                    <Football/>
                    <Baseball/>
                  </div>
              </div>
          )
}

export default Scores
