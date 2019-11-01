import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css';


class SiteHeader extends Component {
    render() {
        return (
            <div>
                    <Container>
                        <Row>
                            <Col lg={9}>
                                ARUMOSAM
                            </Col>
                            <Col lg={1}><Button variant={'default'}><div style={{color: '#fff'}}>Help</div></Button></Col>
                            <Col lg={1}><Button variant={'default'}><div style={{color: '#fff'}}>Login</div></Button></Col>
                            <Col lg={1}><Button variant={'default'}><div style={{color: '#fff'}}>Cart</div></Button></Col>
                        </Row>
                    </Container>
            </div>
        );
    }
}


export default SiteHeader;