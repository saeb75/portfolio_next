import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "../Component/PortfoilioCard/PortfolioCard";
const portfolio = () => {
  return (
    <Layout>
      <Container fluid className="about_container portfolio">
        <HeaderPage title="portfolio" />
        <PortfolioCard />
      </Container>
    </Layout>
  );
};

export default portfolio;
