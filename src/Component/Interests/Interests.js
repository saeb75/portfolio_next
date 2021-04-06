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
const Interests = () => {
  let interestList = [
    {
      icon: <FaMusic />,
      name: "music",
    },
    {
      icon: <FaRoute />,
      name: "Travelling",
    },
    {
      icon: <FaImage />,
      name: "photos",
    },
    {
      icon: <FaFilm />,
      name: "movies",
    },
    {
      icon: <FaSpaceShuttle />,
      name: "space",
    },
    {
      icon: <FaBook />,
      name: "books",
    },
    {
      icon: <FaGamepad />,
      name: "video games",
    },
    {
      icon: <FaCampground />,
      name: "camping",
    },
  ];
  return (
    <div className="sum_info">
      <div className="sum_info_box upAnime ">
        <Row>
          {interestList.map((item) => {
            return (
              <Col md="3">
                <div className="interest_box ">
                  <div className="interest_box_icon">{item.icon}</div>
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

export default Interests;
