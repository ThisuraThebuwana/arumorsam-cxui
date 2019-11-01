import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from "../../public/images/img1.png"
import img2 from "../../public/images/img2.png"
import img3 from "../../public/images/img3.png"
import img_1_1 from "../../public/favicon.ico";

class SiteBody extends Component {
    render() {
        return (
            <div>
                <center>

                        <Navbar bg="dark" variant="dark">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">All Items</Nav.Link>
                                <Nav.Link href="#features">New Items</Nav.Link>
                                <Nav.Link href="#pricing">Discounts</Nav.Link>
                            </Nav>
                        </Navbar>
                    <Container>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img1}
                                        height="300"
                                        alt="First slide"
                                    />
                                    {/*<Carousel.Caption>*/}
                                    {/*    <h3>Second slide label</h3>*/}
                                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                    {/*</Carousel.Caption>*/}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img2}
                                        height="300"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img3}
                                        height="300"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>

                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>

                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                            <Col>
                                                <Card.Img src={img_1_1}/>
                                                <p>Item Name</p>
                                                <p>Rs. xxxx.00</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </center>
            </div>
        );
    }
}

export default SiteBody;