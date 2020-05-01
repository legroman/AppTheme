import React from "react";
import {Row, Col} from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import phone from "../images/phone.png";

export default function Info() {
    return(
        <section id="info">
            <div className="container">
                <Row center="xs" middle="xs">
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <img src={phone} alt="phone"/>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <h2>Core Features</h2>
                        <ul>
                            <li><i><FontAwesomeIcon icon={faCheck}/></i> Fully Optimized</li>
                            <li><i><FontAwesomeIcon icon={faCheck}/></i> Free Support</li>
                            <li><i><FontAwesomeIcon icon={faCheck}/></i> Free Upgrades</li>
                            <li><i><FontAwesomeIcon icon={faCheck}/></i> UpTime Guarantee</li>
                            <li><i><FontAwesomeIcon icon={faCheck}/></i> Multiple Users</li>
                            <li><i><FontAwesomeIcon icon={faCheck}/></i> Plug & Play</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    )
}