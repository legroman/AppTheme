import React from "react";
import {Row, Col} from 'react-flexbox-grid';

export default function Footer() {
    return(
        <footer id="main-footer">
            <div className="container">
                <Row center="xs">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <p>Copy &copy; 2020 | AppTheme</p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}