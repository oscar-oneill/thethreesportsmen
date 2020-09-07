import React from 'react';
import './Blanket.css';
import react from '../Blanket/react.png';

function Blanket() {
    function foldBlanket() {
    let blanket = document.querySelector(".blanket");
    let menu = document.querySelector(".menu");
    if (blanket.style.display === "flex" || blanket.style.display === "") {
        (blanket.style.display = "none") && (menu.style.display = "block");
    } else blanket.style.display = "flex";
    }

    return (
      <div className="blanket">
        <div className="blanket__option" onClick={foldBlanket}>
          &#10005;
        </div>

        <ul className="blanket__items">
          <li><a href="#home">Home</a></li>
          <li><a href="#episodes">Episodes</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#scores">Scores</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="blanket__footer">
          Built with React <img src={react} alt="react"/> by &nbsp;<a href="https://github.com/oscar-oneill">Oscar O'Neill</a>
        </div>
      </div>
    );
}

export default Blanket
