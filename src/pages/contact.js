import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../Component/ContactForm/ContactForm";
const Contact = () => {
  return (
    <Layout>
      <Container fluid className="about_container contact">
        <HeaderPage title="contact" />
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Contact;
