import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDesktop, FaCogs, FaMobileAlt, FaMedkit } from "react-icons/fa";

const Services = () => {
  let serviceList = [
    {
      icon: <FaDesktop />,
      title: "web desgin",
      desc:
        "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    },
    {
      icon: <FaCogs />,
      title: "Web Development",
      desc:
        "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc:
        "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    },
    {
      icon: <FaMedkit />,
      title: "quick Support",
      desc:
        "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    },
  ];
  return (
    <div className="services">
      <div className="sum_info">
        <div className="sum_info_box  services_box">
          <Row>
            {serviceList.map((item) => {
              return (
                <Col md="6">
                  <div className="services_box upAnime">
                    <div className="services_box_icon">
                      <div className="services_box_icon_circle">
                        {item.icon}
                      </div>
                    </div>
                    <div className="services_box_title">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="services_box_desc">
                      <p>{item.desc}</p>
                    </div>
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

export default Services;
