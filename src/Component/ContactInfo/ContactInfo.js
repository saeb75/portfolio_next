import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
const ContactInfo = () => {
  let contactlist = [
    {
      icon: <FaPaperPlane />,
      info: "saebfat@gmail.com",
      title: "email",
    },
    {
      icon: <FaMapMarkerAlt />,
      info: "Maku , IR",
      title: "address",
    },
    {
      icon: <FaPhone />,
      info: "(+98) 901 488 4025",
      title: "phone",
    },
  ];
  return (
    <div>
      <div className="sum_info">
        <div className="sum_info_box contact_info">
          <Row>
            {contactlist.map((item) => {
              return (
                <Col md="4">
                  <div className="contact_info_box">
                    <div className="contact_info_box_icon">{item.icon}</div>
                    <div className="contact_info_box_info">{item.info}</div>
                    <div className="contact_info_box_title">{item.title}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
