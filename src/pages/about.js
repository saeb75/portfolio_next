import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import SumInfo from "../Component/SumInfo/SumInfo";
import Interests from "../Component/Interests/Interests";
import Services from "../Component/Services/Services";
import { motion } from "framer-motion";
const About = () => {
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
        <Container fluid className="about_container">
          <HeaderPage title={"About Me"} />
          <SumInfo />
          <HeaderPage title={"My Interests"} />
          <Interests />
          <HeaderPage title={"services"} />
          <Services />
        </Container>{" "}
      </motion.div>
    </Layout>
  );
};

export default About;
