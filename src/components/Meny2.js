import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

export default function Menu2() {
    return(
        <header id="main-menu">
            <div className="container">
                <h1><span className="primary-text">App</span>Theme</h1>
                <input type="checkbox" className="switcher" id="menu"/>
                <label id="open" htmlFor="menu">
                    <i><FontAwesomeIcon icon={faBars} size="lg"/></i>
                </label>
                <nav>
                    <ul>
                        <li className="current"><a href="#!">Home</a></li>
                        <li className="items"><a href="#!">About</a></li>
                        <li className="items"><a href="#!">Services</a></li>
                        <li className="items"><a href="#!">Contact</a></li>
                    </ul>
                    <label id="close" htmlFor="menu">
                        <i><FontAwesomeIcon icon={faTimes} size="lg"/></i>
                    </label>
                </nav>
            </div>
        </header>
    )
}