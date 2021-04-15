import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "../Component/PortfoilioCard/PortfolioCard";
import { motion } from "framer-motion";
const portfolio = () => {
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
        <Container fluid className="about_container portfolio">
          <HeaderPage title="portfolio" />
          <PortfolioCard />
        </Container>{" "}
      </motion.div>
    </Layout>
  );
};

export default portfolio;
