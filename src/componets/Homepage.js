import React from "react";
import { Row, Col, Carousel, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import studnet from "./img/studnet.png"
import ssipmt_dark from "./img/SSIPMT_black _PNG.png";
import frist from "./itech_photos/1.jpeg";
import second from "./itech_photos/2.jpg";
import third from "./itech_photos/3.jpg";
//import event from "./Event.js"
import Navigation from "./Navigation";
import Footer from "../Footer";

const Homepage = () => {

    return (
        <>
            <Navigation />
            <Carousel fade>
                <Carousel.Item>
                    <img width={1519.2} height={456.69} alt="900x500"
                        className="d-block w-100"
                        src={frist} alt="Logo"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1519.2} height={456.69} alt="900x500"
                        className="d-block w-100"
                        src={second} alt="Logo"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1519.2} height={456.69} alt="900x500"
                        className="d-block w-100"
                        src={third} alt="Logo"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* title */}

            <Row className="titlecontent">
                <Col lg={1}></Col>
                <Col className="red" lg={5}>
                    <p className="para">
                        The department of <b>Information Technology</b> (IT) has a highly proactive association named <b>itech</b>. The association came into existence in August, 2011 and has been an active turf witnessing escalating involvement of 2nd, 3rd and 4th year students of IT in the institute. The association frequently conducts seminars, paper presentations, workshops and a bouquet of developmental activities for students. In the recent past, there have been special sessions on emerging technologies like <b> Microsoft Windows Phone-8, Ethical hacking, android, .net, python etc.</b>
                        <Link to="/Aboutus">
                            <Row className="linkToAboutus">
                                Click here to know more
                            </Row>
                        </Link>
                    </p>

                </Col>
                <Col className="blue" lg={5}>
                    <img className="title-image" src={ssipmt_dark} alt="Logo" ></img>
                </Col>
            </Row>
            {/* cards */}



            <div className="cards" id="other">
                <Col className="homecard ">
                    <Row className="justify_cntr"><img src={studnet}></img></Row>
                    <Row className="justify_cntr"></Row>
                    <Row className="justify_cntr"><Button className="button-css" >know more</Button></Row>
                </Col>
                <Col className="homecard ">
                    <Row className="justify_cntr"><img src={studnet}></img></Row>
                    <Row className="justify_cntr"></Row>
                    <Row className="justify_cntr"><Button className="button-css" >know more</Button></Row>
                </Col>
                <Col className="homecard ">
                    <Row className="justify_cntr"><img src={studnet}></img></Row>
                    <Row className="justify_cntr"></Row>
                    <Row className="justify_cntr"><Button className="button-css" >know more</Button></Row>
                </Col>
                <Col className="homecard ">
                    <Row className="justify_cntr"><img src={studnet}></img></Row>
                    <Row className="justify_cntr"></Row>
                    <Row className="justify_cntr"><Button className="button-css" >know more</Button></Row>
                </Col>
            </div>
            <Footer />
        </>
    )
}

export default Homepage