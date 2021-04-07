import React from "react";
import { Col, Row } from "react-bootstrap";

const PortfolioCard = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="myContainer">
        <Row>
          <Col md="4">
            <div className="portfolio_card upAnime">
              <div className="image"></div>
              <a
                href="http://saeb-mern-ecommerce.herokuapp.com/"
                target="_blank"
              ></a>
            </div>
          </Col>
          <Col md="4">
            <div className="portfolio_card upAnime">
              <div className="image"></div>
              <a
                href="http://saeb-mern-ecommerce.herokuapp.com/"
                target="_blank"
              ></a>
            </div>
          </Col>
          <Col md="4">
            <div className="portfolio_card upAnime">
              <div className="image"></div>
              <a
                href="http://saeb-mern-ecommerce.herokuapp.com/"
                target="_blank"
              ></a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PortfolioCard;
