import React from 'react';
import './Blanket.css';

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
          <li>Historical Picks</li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="blanket__footer">
          &#169; 2020 Three Sports Men - All Rights Reserved.
        </div>
      </div>
    );
}

export default Blanket
