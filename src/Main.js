import React from "react";

import { SideNav } from "./Components/NavbarsComponents/SideNav";
import Login from "./Components/LoginComponents/Login";
import { Container, Row, Col } from "react-bootstrap";
import Book from "./Components/bookComponents/Books";
import Modals from "./Components/Modals";

import { Outlet } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import NavBar from "./Components/NavbarsComponents/NavBar";

export const Main = () => {
  const login = useSelector((state) => state.loginStatus.login);

  return (
    <div>
      <NavBar />
      {login ? (
        <>
          <Container fluid>
            <Row>
              <Col
                md={3}
                className="bg-body-tertiary p-3 sticky-top d-none d-lg-block "
                style={{ height: "100vh" }}
              >
                <SideNav />
              </Col>
              <Col lg={9} sm={12} className="p-2">
                <Outlet />
              </Col>
            </Row>
            <Modals />
          </Container>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};
