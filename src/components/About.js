import React from 'react';
import '../components/About.css';
import Earl from '../media/images/earl.jpg';
import Josh from '../media/images/josh.jpg';
import Yankees from '../media/images/NYY.png';
import Nets from '../media/images/BKN.png';
import Giants from '../media/images/NYG.png';
import Rockets from '../media/images/HOU.png';
import Cowboys from '../media/images/DAL.png';
import St_Johns from '../media/images/STJ.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
      <div className="about__wrap" id="about">
        <div className="about__header">The Sports Men</div>

        <div className="about__body">
          <div className="about__earl">
            <div className="earl__display">
              <img className="pics" src={Earl} alt="earl" />
              <span className="name">Earl</span>
              <span className="social">
                <FontAwesomeIcon className="icons" icon={faTwitter} />
                <FontAwesomeIcon className="icons" icon={faInstagram} />
              </span>
            </div>
            <div className="earl__data">
              <div className="earl__bio">"Single father with no kids"</div>
              <span className="earl__teams">
                <h6>Favorite Teams</h6>
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
                <FontAwesomeIcon className="icons" icon={faTwitter} />
                <FontAwesomeIcon className="icons" icon={faInstagram} />
              </span>
            </div>
            <div className="josh__data">
              <div className="josh__bio">"James Harden = MVP"</div>
              <span className="josh__teams">
                <h6>Favorite Teams</h6>
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
