import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "./Navigation";
import SSIPMT from "./img/SSIPMT.png";
import "../App.css"
const Aboutus = () => {

    return (
        <Container fluid>
            <Navigation />
            <Row className="about ">
                <Col className="red" lg={7}>
                    <p className="para">
                        The department of <b>Information Technology</b> (IT) has a highly proactive association named <b>itech</b>. The association came into existence in August, 2011 and has been an active turf witnessing escalating involvement of 2nd, 3rd and 4th year students of IT in the institute. The association frequently conducts seminars, paper presentations, workshops and a bouquet of developmental activities for students. In the recent past, there have been special sessions on emerging technologies like <b> Microsoft Windows Phone-8, Ethical hacking, android, .net, python etc.</b>
                    </p>
                    <br></br>
                    <p className="para">
                        The objective of this association is to confer upon its students, that extra thrust of technical, logical and industry oriented knowledge apart from regular curriculum. On the other hand, itech also happens to be a rendezvous for seniors and juniors to build on skill like team work, leadership, communication skills and an array of extracurricular activities.
                    </p>
                </Col>
                <Col className="blue" lg={5}>
                    <img className="title-image" src={SSIPMT} alt="Logo" ></img>
                </Col>
            </Row>
            <Row className="  boardmembers ">
                <Row className="boardhead justify_cntr">Members of Department
                </Row>
                <Row className="faculty">
                    <Row>
                        <Col className="facultycard">
                            <Row>
                                <Col>
                                    <img className="facultyimg" src={SSIPMT}></img>
                                </Col>
                                <Col>
                                    <Row>Name</Row>
                                    <Row>Designation</Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="facultycard">
                            <Row>
                                <Col>
                                    <img className="facultyimg" src={SSIPMT}></img>
                                </Col>
                                <Col>
                                    <Row>Name</Row>
                                    <Row>Designation</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="facultycard">
                            <Row>
                                <Col>
                                    <img className="facultyimg" src={SSIPMT}></img>
                                </Col>
                                <Col>
                                    <Row>Name</Row>
                                    <Row>Designation</Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="facultycard">
                            <Row>
                                <Col>
                                    <img className="facultyimg" src={SSIPMT}></img>
                                </Col>
                                <Col>
                                    <Row>Name</Row>
                                    <Row>Designation</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="facultycard">
                            <Row>
                                <Col>
                                    <img className="facultyimg" src={SSIPMT}></img>
                                </Col>
                                <Col>
                                    <Row>Name</Row>
                                    <Row>Designation</Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="facultycard">
                            <Row>
                                <Col>
                                    <img className="facultyimg" src={SSIPMT}></img>
                                </Col>
                                <Col>
                                    <Row>Name</Row>
                                    <Row>Designation</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Row>
        </Container>
    )
}

export default Aboutus