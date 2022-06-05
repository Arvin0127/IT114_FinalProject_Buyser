import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
const Resume = () => {
    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        >
        <Container className="pt-5">
            <Row>
                <h1 className="display-3 text-info">Credentials</h1>
            </Row>

           <Row className="mt-5">
                <Col md={{ span: 4, offset: 4 }} className="text-end"><h3>Education</h3></Col>
                <Col md={{ span: 4 }}>
                    <p>
                        BS Information Technology, <br/>
                        Cagara State University <br/>
                        (2018-2022)<br/>
                        <br/>
                        Information and Communications Technology, <br/>
                        Diatagon Catholic High School, Inc.<br/>
                        (2012-2018)<br/>

                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={{ span: 4, offset: 4 }} className="text-end"><h3>Skills</h3></Col>
                <Col md={{ span: 4 }}>
                    <p>
                        Visual Branding <br/>
                        Photography <br/>
                        Computer System Servicing<br/>
                        Soft Skills <br/>
                        Journalism <br/>
                        Adobe Creative
                    </p>
                </Col>
            </Row>          
       </Container>
       </motion.div>
    )
};

export default Resume;