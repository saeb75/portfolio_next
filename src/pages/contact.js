import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../Component/ContactForm/ContactForm";
import ContactInfo from "../Component/ContactInfo/ContactInfo";
const Contact = () => {
  return (
    <Layout>
      <Container fluid className="about_container contact">
        <HeaderPage title="contact" />
        <ContactForm />
        <ContactInfo />
      </Container>
    </Layout>
  );
};

export default Contact;
