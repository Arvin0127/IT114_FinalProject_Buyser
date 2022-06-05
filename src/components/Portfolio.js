import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import photo1 from "../img/photo 1.jpg";
import photo2 from "../img/photo 2.jpg";
import graphic1 from "../img/graphics 1.jpg";
import graphic2 from "../img/graphics 2.jpg";
import illustration1 from "../img/illustration 1.jpg";
import illustration2 from "../img/illustration 2.jpg";
import { motion } from "framer-motion";




const Portfolio = () => {

    useEffect(() => {
        console.log('Portfolio component did mount and component did update ')
    })

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
        >
            <Container
                className="mt-3"
            >
                <Row>
                    <h1>My Works</h1>
                </Row>
                <Row className="mh-50">
                    <Col className="p-2 m-2 overflow-hidden bg-dark text-center rounded-3 text-white" style={{ maxHeight: "400px" }}>
                        Illustration 1
                        <Image src={illustration1} rounded fluid className="h-1 mh-100" alt="arvin buyser picture" />
                    </Col>
                    <Col className="p-2 m-2 overflow-hidden bg-dark text-center rounded-3 text-white" style={{ maxHeight: "400px" }}>
                        Graphics 1
                        <Image src={graphic1} rounded fluid className="h-1 mw-100" alt="arvin buyser picture" />
                    </Col>
                    <Col className="p-2 m-2 overflow-hidden bg-dark text-center rounded-3 text-white" style={{ maxHeight: "400px" }}>
                        Photo 1
                        <Image src={photo1} rounded fluid className="h-1 mw-100" alt="arvin buyser picture" />
                    </Col>
                </Row>
                <Row className="mh-50">
                    <Col className="p-2 m-2 overflow-hidden bg-dark text-center rounded-3 text-white" style={{ maxHeight: "400px" }}>
                        Illustration 2
                        <Image src={illustration2} rounded fluid className="h-1 mh-100" alt="arvin buyser picture" />
                    </Col>
                    <Col className="p-2 m-2 overflow-hidden bg-dark text-center rounded-3 text-white" style={{ maxHeight: "400px" }}>
                        Graphics 2
                        <Image src={graphic2} rounded fluid className="h-1 mw-100" alt="arvin buyser picture" />
                    </Col>
                    <Col className="p-2 m-2 overflow-hidden bg-dark text-center rounded-3 text-white" style={{ maxHeight: "400px" }}>
                        Photo 2
                        <Image src={photo2} rounded fluid className="h-1 mw-100" alt="arvin buyser picture" />
                    </Col>
                </Row>


            </Container>
        </motion.div>
    )
};

export default Portfolio;