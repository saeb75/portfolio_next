import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderPage from "../HeaderPage/HeaderPage";
import { FaCalendarAlt } from "react-icons/fa";
const ExpirenceEducation = () => {
  let exList = [
    {
      title: "Web Design",
      desc:
        "Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.",
      date: "2015 - 2016",
    },
    {
      title: "Fornt-End Developer",
      desc:
        "Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.",

      date: "2016 - ",
    },
    {
      title: "Web Development",
      desc:
        "Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.",
      date: "2017 - ",
    },
  ];
  let edList = [
    {
      title: "Bachelor Degree",
      desc:
        "Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.",
      date: "2016 - 2020",
    },
  ];
  return (
    <Container fluid className="d-flex justify-content-center">
      <div className="myContainer">
        <Row>
          <Col md="6">
            <HeaderPage title="Experience" />
            <div className="ex_ed_box upAnime">
              <ul>
                {exList.map((item) => {
                  return (
                    <li>
                      <div>
                        <span className="line">
                          <span className="circle"></span>
                        </span>
                      </div>
                      <div>
                        <section className="ex_ed_box_title">
                          {item.title}
                        </section>
                        <section className="ex_ed_box_date">
                          <FaCalendarAlt />
                          <span>{item.date}</span>
                        </section>
                        <section className="ex_ed_box_desc">
                          {item.desc}
                        </section>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col md="6">
            <HeaderPage title="education" />
            <div className="ex_ed_box upAnime">
              <ul>
                {edList.map((item) => {
                  return (
                    <li>
                      <div>
                        <span className="line">
                          <span className="circle"></span>
                        </span>
                      </div>
                      <div>
                        <section className="ex_ed_box_title">
                          {item.title}
                        </section>
                        <section className="ex_ed_box_date">
                          <FaCalendarAlt />
                          <span>{item.date}</span>
                        </section>
                        <section className="ex_ed_box_desc">
                          {item.desc}
                        </section>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="ed_image upAnime">
              <img src="/assents/codding.jpg" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ExpirenceEducation;
