import Head from "next/head";
import Layout from "../Component/Layout/Layout";
import styles from "../styles/Home.module.css";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../Component/Animation/animation";
export default function Home() {
  const [slide, setSlide] = useState(false);

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={pageTransition}
        className="personal_title"
      >
        <h1 className="saeb"> hi, i'm Saeb Jafari</h1>
        <p className="d-flex">
          I'm a<p style={{ opacity: 0 }}>s</p>
          <Typical
            steps={[
              "Front End Developer",
              1000,
              "Mern Stack Developer",
              1000,
              "Web Developer",
              1000,
            ]}
            loop={1}
          />
        </p>
      </motion.div>
    </Layout>
  );
}
