import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}

        >
            <Container className="pt-5">
                <Row className="pt-5">
                    <h1 className="display-1 text-info">Let's make it happen!</h1>
                </Row>

                <Row className="pt-5">
                    <Col>
                        <h3>For bookings and inquiries, Email at:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>arvin.buyser@carsu.edu.ph</h3>
                    </Col>
                </Row>

                <Row style={{ maxWidth: "25%" }}>
                    <Col fluid className="p-2 mt-2 text-left">
                        <a className="d-inline-block text-primary" href="https://www.facebook.com/ravin.rubeys" target="_blank"><FaFacebookSquare className="fs-2" /></a>
                    </Col>
                    <Col fluid className="p-2 mt-2 text-left">
                        <a className="d-inline-block text-danger" href="https://www.youtube.com/channel/UCoIautL0IVLRD51EOIEm93Q" target="_blank"><FaYoutubeSquare className="fs-2" /></a>
                    </Col>
                    <Col fluid className="p-2 mt-2 text-left">
                        <a className="d-inline-block text-warning" href="https://www.instagram.com/ravinrubeys27" target="_blank"><FaInstagramSquare className="fs-2" /></a>
                    </Col>
                    <Col fluid className="p-2 mt-2 text-left">
                        <a className="d-inline-block text-info" href="https://www.linkedin.com/in/arvin-buyser-b2a21a23b/" target="_blank"><FaLinkedin className="fs-2" /></a>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
};

export default Contact;