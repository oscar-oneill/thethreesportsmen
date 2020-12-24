import React from 'react';
import '../components/Scores.css';
import Basketball from '../components/Basketball';
import Football from '../components/Football';
// import Baseball from '../components/Baseball'; Season End
import CFB from '../components/CFB';
import CBB from '../components/CBB';

const Scores = () => {
          return (
            <div className="scores__wrap" id="scores">
                <div className="scores__header">
                      Scores
                </div>
                <div className="scores__body">
                    <Basketball/> 
                    <Football/>
                    {/* <Baseball/> */}
                    <CFB />
                    <CBB />
                </div>
            </div>
        )
}

export default Scores
