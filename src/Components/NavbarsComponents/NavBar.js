import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SignOut from "../LoginComponents/SignOut";

import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const login = useSelector((state) => state.loginStatus.login);

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2 py-4-md " s>
      <Container>
        <Navbar.Brand href="#home">
          <LocalLibraryIcon />
          Library Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav  " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto d-lg-none text-center ">
            <NavLink
              to="/"
              className="text-bold text-decoration-none text-secondary fs-5 text my-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/member"
              className="text-bold text-decoration-none text-secondary fs-5 text my-2"
            >
              Members
            </NavLink>{" "}
            <NavLink
              to="transaction"
              className="text-bold text-decoration-none text-secondary fs-5 text my-2"
            >
              Transaction
            </NavLink>
          </Nav>
          <Nav className="d-lg-none">
            {/* signout option */}
            {login ? <SignOut /> : ""}
          </Nav>
        </Navbar.Collapse>
        <Nav className="d-lg-block d-none">
          {/* signout option */}
          {login ? <SignOut /> : ""}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
