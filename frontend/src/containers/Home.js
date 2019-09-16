import React, { Component } from "react";
import { Button, Col, Row } from 'react-bootstrap';
import "../styles/styles.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
            <div className="landingPage">
                <h1>Pimp My Book</h1>
                <h3>Simplistic Web Application</h3>
                <Row>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col className="personal-space" xs={6} md={4}>
                    <Button variant="primary" href="#">
                        Add Book
                    </Button>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col className="personal-space" xs={6} md={4}>
                    <Button variant="primary" href="/AllBooksOutput">
                        View All
                    </Button>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
            </div>
            </div>
        );
    }
}
  