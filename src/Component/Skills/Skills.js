import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaMusic,
  FaRoute,
  FaImage,
  FaFilm,
  FaSpaceShuttle,
  FaBook,
  FaGamepad,
  FaTree,
  FaCampground,
} from "react-icons/fa";
let interestList = [
  {
    icon: "/assents/icon/html.png",
    name: "html",
  },
  {
    icon: "/assents/icon/css.png",
    name: "css",
  },
  {
    icon: "/assents/icon/javascript.png",
    name: "javascript",
  },
  {
    icon: "/assents/icon/bootstrap.png",
    name: "bootstrap",
  },
  {
    icon: "/assents/icon/react.png",
    name: "react js",
  },
  {
    icon: "/assents/icon/sass.png",
    name: "sass",
  },
  {
    icon: "/assents/icon/next.png",
    name: "next js",
  },
  {
    icon: "/assents/icon/react-native.png",
    name: "react native",
  },
  {
    icon: "/assents/icon/webPack.png",
    name: "web pack ",
  },
  {
    icon: "/assents/icon/material.png",
    name: "material ui",
  },
  {
    icon: "/assents/icon/ant.png",
    name: "ant design",
  },
  {
    icon: "/assents/icon/node.png",
    name: "node js",
  },
  {
    icon: "/assents/icon/express.png",
    name: "express js",
  },
  {
    icon: "/assents/icon/mongodb.png",
    name: "mongodb",
  },
  {
    icon: "/assents/icon/styled.png",
    name: "styled component",
  },
  {
    icon: "/assents/icon/python.png",
    name: "python",
  },
];
const Skills = () => {
  return (
    <div className="sum_info">
      <div className="sum_info_box upAnime ">
        <Row>
          {interestList.map((item) => {
            return (
              <Col md="3">
                <div className="interest_box ">
                  <div className="interest_box_icon">
                    <img src={item.icon} className="skill_image" />
                  </div>
                  <div className="interest_box_name">{item.name}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
