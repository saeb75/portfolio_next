import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import SumInfo from "../Component/SumInfo/SumInfo";
import Interests from "../Component/Interests/Interests";
import Services from "../Component/Services/Services";
const About = () => {
  return (
    <Layout>
      <Container fluid className="about_container">
        <HeaderPage title={"About Me"} />
        <SumInfo />
        <HeaderPage title={"My Interests"} />
        <Interests />
        <HeaderPage title={"services"} />
        <Services />
      </Container>
    </Layout>
  );
};

export default About;
