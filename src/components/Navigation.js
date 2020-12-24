import React, {useState, useRef} from 'react';
import '../components/Navigation.css';
import '../components/Blanket.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
    const blanketRef = useRef(null);
    const [blanket, setBlanket] = useState(false);
    const onClick = () => setBlanket(!blanket);

    const burgerRef = useRef(null);
    const [burger, setBurger] = useState(false);
    const hideBurger = () => setBurger(!burger);

    return (
        <div className="nav__navbar">
            <div className="nav__title">
                <div className="title__main">Three Sports Men Podcast<span>*</span></div>
                <div className="title__sub">with Earl & Josh</div>
            </div>

            <div ref={burgerRef} className={`menu ${burger ? "active" : "inactive"}`} onClick={() => {onClick(); hideBurger();}}>
                &#9776;
            </div>

            <div ref={blanketRef} className={`blanket ${blanket ? "active" : "inactive"}`}> 
                <div className="blanket__option" onClick={() => {onClick(); hideBurger();}}>
                    &#10005;
                </div>

                <button className="button__paypal_b">
                    <FontAwesomeIcon className="paypal_b" icon={faPaypal} />
                    <a href="https://www.paypal.com/donate/?token=Leh1JgBLlEmIt71hM7MhRAwAkVsO5KoppDftpor29hG1w9TzRxe-wzxaEX1LZO0i0xk9SG&country.x=US&loca">Donate Now</a>
                </button>

                <ul className="blanket__items">
                    <li onClick={() => { onClick(); hideBurger(); window.scrollTo(0, 0) }}>Home</li>
                    <li onClick={() => { onClick(); hideBurger(); window.scrollTo(0, 609) }}>Episodes</li>
                    <li onClick={() => { onClick(); hideBurger(); window.scrollTo(0, 781) }}>About</li>
                    <li onClick={() => { onClick(); hideBurger(); window.scrollTo(0, 1056) }}>Scores</li>
                    <li onClick={() => { onClick(); hideBurger(); window.scrollTo(0, 6085) }}>Contact Us</li>
                </ul>
            </div>

            <button className="button__paypal">
                <FontAwesomeIcon className="paypal" icon={faPaypal} />
                <a href="https://www.paypal.com/donate/?token=Leh1JgBLlEmIt71hM7MhRAwAkVsO5KoppDftpor29hG1w9TzRxe-wzxaEX1LZO0i0xk9SG&country.x=US&loca">Donate Now</a>
            </button>
        </div>
    )
}

export default Navigation
