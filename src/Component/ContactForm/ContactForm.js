import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div>
      <div className="sum_info">
        <div className="sum_info_box  ">
          <form>
            <Row>
              <Col md="6">
                <input type="text" placeholder="Name" />
              </Col>
              <Col md="6">
                <input type="email" placeholder="Email" />
              </Col>
              <Col md="12">
                <textarea placeholder="Your Message" />
              </Col>
              <Col md="12">
                <div className="button_container">
                  <div className="down_cv">
                    <a>
                      <p>send message</p>
                    </a>
                    <span></span>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
