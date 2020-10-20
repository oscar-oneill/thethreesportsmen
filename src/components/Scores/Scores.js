import React from 'react';
import '../Scores/Scores.css';
// import Basketball from '../Basketball/Basketball';
import Football from '../Football/Football';
import Baseball from '../Baseball/Baseball';
import CFB from '../CFB/CFB';

const Scores = () => {
          return (
              <div className="scores__wrap" id="scores">
                  <div className="scores__header">
                      Scores
                  </div>
                  <div className="scores__body">
                    {/* <Basketball/>  */}
                    <Football/>
                    <Baseball/>
                    <CFB />
                  </div>
              </div>
          )
}

export default Scores
