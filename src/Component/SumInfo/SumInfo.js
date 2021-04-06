import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarked, FaAward, FaUserAstronaut } from "react-icons/fa";

const SumInfo = () => {
  return (
    <div className="sum_info">
      <div className="sum_info_box upAnime ">
        <Row>
          <Col md="3">
            <section className="image_container">
              <img src="/assents/saeb4.jpg" />
            </section>
          </Col>
          <Col md="9">
            <div className="sum_info_name">saeb jafari</div>
            <div className="sum_info_loc">
              <FaMapMarked />
              <span>maku , IR</span>
            </div>
            <div className="sum_info_desc">
              <p>
                Hello! I’m Saeb Jafari a self-taught & award winning Digital
                Designer & Developer with over five years work experience. I
                started in my children’s room, got pro at renowned digital
                agencies akij co and nork blue lebel. Now I’m based in USA,
                America, working for Apple fredmansky and enjoying the life in
                the countryside.
              </p>
              <p>
                I have couple of hobbies but I like to travel. I have already
                travelled almost all the districts of our country with my
                father. I am fond of fruit.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="4">
            <div className="d-flex">
              <div className="sum_info_circle">
                <FaAward />
              </div>
              <div>
                <p className="circle_title">5 years</p>
                <p className="circle_info">expiernce</p>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="d-flex">
              <div className="sum_info_circle">
                <FaUserAstronaut />
              </div>
              <div>
                <p className="circle_title">freelance</p>
                <p className="circle_info">available</p>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="down_cv">
              <a>
                <p>download cV</p>
              </a>
              <span></span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SumInfo;
