import React from "react";
import Container from "react-bootstrap/Container";
import { StyleRoot } from 'radium';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";

const Home = () => {

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
    >
      <StyleRoot>
        <Container className="pt-5">
          <Row className="pt-5">
            <Col md={{ span: 8, }}>
              <h1 className="display-1">Hi, I'm Arvin Buyser!</h1>
              <h4>I'm a Graphics Designer and Photographer.</h4>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col md={{ span: 8, }}>
              <Button variant="info">
                <Link className="nav-link text-dark" to="/about">Know More</Link>
              </Button>{' '}
            </Col>
          </Row>
        </Container>
      </StyleRoot>
    </motion.div>
  )
};

export default Home;