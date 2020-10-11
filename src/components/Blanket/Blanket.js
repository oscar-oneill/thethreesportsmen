import React from 'react';
import './Blanket.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const Blanket = () => {
    const foldBlanket = () => {
    let blanket = document.querySelector(".blanket");
    let menu = document.querySelector(".menu");

    if (blanket.style.display === "flex" || blanket.style.display === "") {
        (blanket.style.display = "none") && (menu.style.display = "block");
    } else {
        blanket.style.display = "flex"
      }
    }

    return (
      <div className="blanket">
        <div className="blanket__option" onClick={foldBlanket}>
          &#10005;
        </div>

          <button className="button__paypal_b">
            <FontAwesomeIcon className="paypal_b" icon={faPaypal} />
            <a href="https://www.paypal.com/donate/?token=Leh1JgBLlEmIt71hM7MhRAwAkVsO5KoppDftpor29hG1w9TzRxe-wzxaEX1LZO0i0xk9SG&country.x=US&loca">Donate Now</a>
          </button>

        <ul className="blanket__items">
          <li onClick={() => { foldBlanket(); window.scrollTo(0, 0) }}>Home</li>
          <li onClick={() => { foldBlanket(); window.scrollTo(0, 609) }}>Episodes</li>
          <li onClick={() => { foldBlanket(); window.scrollTo(0, 781) }}>About</li>
          <li onClick={() => { foldBlanket(); window.scrollTo(0, 1056) }}>Scores</li>
          <li onClick={() => { foldBlanket(); }}>Contact Us</li>
        </ul>
      </div>
    );
}

export default Blanket
