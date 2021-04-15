import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import ExpirenceEducation from "../Component/ExpirenceEducation/ExpirenceEducation";
import Skills from "../Component/Skills/Skills";
import { motion } from "framer-motion";
import { pageTransition } from "../Component/Animation/animation";
const Resume = () => {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={pageTransition}
        className="resume_container"
      >
        <HeaderPage title={"resume"} />
        <ExpirenceEducation />
        <HeaderPage title={"skills"} />
        <Skills />
      </motion.div>
    </Layout>
  );
};

export default Resume;
