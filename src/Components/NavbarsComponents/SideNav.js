import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import PaidIcon from "@mui/icons-material/Paid";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  return (
    <div className="d-none d-lg-block ">
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavLink
            to="/"
            className="text-bold text-decoration-none text-secondary fs-5 text"
          >
            <BookIcon />
            Books
          </NavLink>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavLink
            to="/member"
            className="text-bold text-decoration-none text-secondary fs-5 text"
          >
            <PersonIcon />
            Members
          </NavLink>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary ">
        <Container>
          <NavLink
            to="/transaction"
            className="text-bold text-decoration-none text-secondary fs-5 text"
          >
            <PaidIcon />
            Transaction
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};
