import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import me from "../img/arvin.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
        >
            <Container className="pt-5">
                <Row>
                    <h2>About Arvin Buyser</h2>
                </Row>

                <Row>
                    <Col>
                        I have over 10 years of experience when it comes to graphics design and photography. I am passionate about bold but intuitive design, and doing the work seriously to achieve the product they've envisioned.
                    </Col>
                </Row>
                <Row>
                    <Image src={me} rounded fluid className="pt-3 h-1 rounded-3" alt="arvin buyser picture" />
                </Row>

            </Container>
        </motion.div>
    )
};

export default About;