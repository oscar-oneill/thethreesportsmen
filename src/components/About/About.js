import React from 'react';
import '../About/About.css';
import Earl from './earl.jpg';
import Josh from './josh.jpg';
import Yankees from './NYY.png';
import Nets from './BKN.png';
import Giants from './NYG.png';
import Rockets from './HOU.png';
import Cowboys from './DAL.png';
import St_Johns from './STJ.png';

function About() {
    return (
      <div className="about__wrap" id="about">
        <div className="about__header">The Sports Men</div>

        <div className="about__body">
          <div className="about__earl">
            <div className="earl__display">
              <img className="pics" src={Earl} alt="earl" />
              <span className="name">Earl</span>
              <span className="social">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </span>
            </div>
            <div className="earl__data">
              <div className="earl__bio">"Single father with no kids"</div>
              <span className="earl__teams">
                <h6>Team Bias</h6>
                <img src={Yankees} alt="Yankees" />
                <img src={Nets} alt="Nets" />
                <img src={Giants} alt="Giants" />
                <img src={St_Johns} alt="St. John's" />
              </span>
            </div>
          </div>

          <div className="about__josh">
            <div className="josh__display">
              <img className="pics" src={Josh} alt="josh" />
              <span className="name">Josh</span>
              <span className="social">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </span>
            </div>
            <div className="josh__data">
              <div className="josh__bio">"#FireJasonGarrett"</div>
              <span className="josh__teams">
                <h6>Team Bias</h6>
                <img src={Yankees} alt="Yankees" />
                <img src={Rockets} alt="Rockets" />
                <img src={Cowboys} alt="Cowboys" />
                <img src={St_Johns} alt="St. John's" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About
