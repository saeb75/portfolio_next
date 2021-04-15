import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "../Component/PortfoilioCard/PortfolioCard";
import { motion } from "framer-motion";
import { pageTransition } from "../Component/Animation/animation";
const portfolio = () => {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={pageTransition}
      >
        <Container fluid className="about_container portfolio">
          <HeaderPage title="portfolio" />
          <PortfolioCard />
        </Container>{" "}
      </motion.div>
    </Layout>
  );
};

export default portfolio;
