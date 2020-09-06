import React from 'react';
import '../Navigation/Navigation.css';

function Navigation() {
    function openBlanket() {
        let blanket = document.querySelector(".blanket");
        let menu = document.querySelector(".menu");
        if (blanket.style.display === "none" || blanket.style.display === "") {
            (blanket.style.display = "flex") && (menu.style.display = "none")
        } else (blanket.style.display = "none") && (menu.style.display = "block")
    }
    
    return (
        <div className="nav__navbar">
            <div className="nav__title">
                <div className="title__main">Three Sports Men Podcast<span>*</span></div>
                <div className="title__sub">with Earl & Josh</div>
            </div>

            <div className="menu" onClick={openBlanket}>
                &#9776;
            </div>

            <button className="button__paypal">
                <i class="fab fa-paypal"></i>
                <a href="https://www.paypal.com/donate/?token=Leh1JgBLlEmIt71hM7MhRAwAkVsO5KoppDftpor29hG1w9TzRxe-wzxaEX1LZO0i0xk9SG&country.x=US&loca">Donate Now</a>
            </button>
        </div>
    )
}

export default Navigation
