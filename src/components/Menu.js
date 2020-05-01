import React, {useState} from "react";
import {Row, Col} from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
    const [showMenu, setShowMenu] = useState("");
    const handleOnChange = event => {
        if (event.target.checked){
            setShowMenu("show");
        }else {
            setShowMenu("");
        }
    };

    return (
        <header id="main-header">
            <div className="container">
                <Row end="sm md lg" middle="xs sm md lg">
                    <Col xs={12} sm={2} md={2} lg={2}>
                        <h1><span className="primary-text">App</span>Theme</h1>
                        <input type="checkbox" id="check" name="check-menu" onChange={handleOnChange}/>
                        <label htmlFor="check">
                            <i id="btn"><FontAwesomeIcon icon={faBars}/></i>
                            <i id="cancel"><FontAwesomeIcon icon={faTimes}/></i>
                        </label>
                    </Col>
                    <Col xs={12} sm={10} md={10} lg={10}>
                        <nav id="navbar" className={showMenu}>
                            <ul>
                                <li className="current"><a href="#!">Home</a></li>
                                <li className="items"><a href="#!">About</a></li>
                                <li className="items"><a href="#!">Services</a></li>
                                <li className="items"><a href="#!">Contact</a></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </div>
        </header>
    )
}
