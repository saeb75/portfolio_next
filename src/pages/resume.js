import React from "react";
import Layout from "../Component/Layout/Layout";
import HeaderPage from "../Component/HeaderPage/HeaderPage";
import ExpirenceEducation from "../Component/ExpirenceEducation/ExpirenceEducation";
import Skills from "../Component/Skills/Skills";
const Resume = () => {
  return (
    <Layout>
      <div className="resume_container">
        <HeaderPage title={"resume"} />
        <ExpirenceEducation />
        <HeaderPage title={"skills"} />
        <Skills />
      </div>
    </Layout>
  );
};

export default Resume;
