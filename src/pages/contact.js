import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../Component/ContactForm/ContactForm";
import ContactInfo from "../Component/ContactInfo/ContactInfo";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={{
          hidden: { x: 1300, opacity: 0 },
          show: { opacity: 1, x: 0 },
          exit: {
            x: 1300,
            opacity: 0,
          },
        }}
      >
        <Container fluid className="about_container contact">
          <HeaderPage title="contact" />
          <ContactForm />
          <ContactInfo />
        </Container>
      </motion.div>
    </Layout>
  );
};

export default Contact;
