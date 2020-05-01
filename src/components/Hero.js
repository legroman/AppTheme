import React from "react";
import {Row, Col} from 'react-flexbox-grid';

export default function Hero() {
    return(
        <section id="showcase">
            <div className="container">
                <Row center="xs" middle="xs">
                    <Col xs={10} sm={10} md={10} lg={7} className="showcase-content">
                        <h1>Welcome to <span className="primary-text">AppTheme</span></h1>
                        <p>A template build with HTML5, CSS3 and Flexboxgrid</p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}