import React from "react";
import {Row, Col} from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMap} from '@fortawesome/free-solid-svg-icons'

export default function Company() {
    return(
        <section id="company">
            <div className="container">
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><i><FontAwesomeIcon icon={faPhone}/> (099)20-26-700</i></li>
                            <li><i><FontAwesomeIcon icon={faEnvelope}/> legromant@gmail.com</i></li>
                            <li><i><FontAwesomeIcon icon={faMap}/> Ivano-Frankovsk, Ukraine</i></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <h4>About Us</h4>
                        <p className="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, assumenda culpa iste iure non perferendis quasi quos sapiente similique soluta.</p>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <h4>Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <form>
                            <input type="text" name="email" placeholder="Enter Email"/>
                            <button type="submit" name="button">Submit</button>
                        </form>
                    </Col>
                </Row>
            </div>
        </section>
    )
}