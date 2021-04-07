import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHouseDamage,
  FaUserTie,
  FaAddressBook,
  FaBriefcase,
  FaReceipt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const [state, setState] = useState(router.pathname);

  const listItems = [
    {
      link: "/",
      icon: <FaHouseDamage />,
    },
    {
      link: "/about",
      icon: <FaUserTie />,
    },
    {
      link: "/resume",
      icon: <FaAddressBook />,
    },
    {
      link: "/portfolio",
      icon: <FaBriefcase />,
    },

    {
      link: "/contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="layout">
      <Container fluid className="layout_container p-0">
        <img src="/assents/background2.jpg" className="background_img" />
        <div md="1" className="layout_side_container p-0">
          <div className="layout_side">
            <div>
              <div className="logo">
                <img src="/assents/logo.png" />
              </div>
              <ul className="layout_list">
                {listItems.map((item) => {
                  return (
                    <li
                      onClick={() => setState(item.link)}
                      className={`list_item ${
                        state === item.link ? "active" : ""
                      }`}
                    >
                      <Link href={item.link}>{item.icon}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="layout_sound">sound</div>
          </div>
        </div>
        <div className="p-0 layout_body">{children}</div>
      </Container>
    </div>
  );
};

export default Layout;
