import React from 'react';
import '../Scores/Scores.css';
// import Basketball from '../Basketball/Basketball'; Season End
import Football from '../Football/Football';
// import Baseball from '../Baseball/Baseball'; Season End
import CFB from '../CFB/CFB';
import CBB from '../CBB/CBB';

const Scores = () => {
          return (
            <div className="scores__wrap" id="scores">
                <div className="scores__header">
                      Scores
                </div>
                <div className="scores__body">
                    {/* <Basketball/>  */}
                    <Football/>
                    {/* <Baseball/> */}
                    <CFB />
                    <CBB />
                </div>
            </div>
        )
}

export default Scores
