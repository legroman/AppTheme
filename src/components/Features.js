import React from "react";
import {Row, Col} from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faQuestionCircle, faRocket, faChartLine, faUsers, faPlug } from '@fortawesome/free-solid-svg-icons'

export default function Features() {
    return(
        <section id="features">
            <Row center="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h2>Core Features</h2>
                    <p>What's included</p>
                    <Row center="xs">
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <i><FontAwesomeIcon icon={faTachometerAlt}/></i>
                            <h4>Fully Optimized</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis?</p>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <i><FontAwesomeIcon icon={faQuestionCircle}/></i>
                            <h4>Free Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis?</p>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <i><FontAwesomeIcon icon={faRocket}/></i>
                            <h4>Free Upgrades</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis?</p>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <i><FontAwesomeIcon icon={faChartLine}/></i>
                            <h4>Multi-User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis?</p>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <i><FontAwesomeIcon icon={faUsers}/></i>
                            <h4>Free Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis?</p>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <i><FontAwesomeIcon icon={faPlug}/></i>
                            <h4>Plug & Play</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis?</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}