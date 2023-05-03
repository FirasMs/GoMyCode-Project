import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import care from "../../images/care.png";
import { Navigate, useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        style={{ zIndex: "1", width: "100%" }}
      >
        <Container>
          <Navbar.Brand style={{cursor:"pointer"}} onClick={() => navigate('/')}>
          <img src={care} alt="ff" style={{ width: "200px" }}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ marginLeft: "900px" }}
          >
            <Nav className="me-auto">
              <i className="fa-solid fa-folder-open" style={{ marginTop: "13px" }} />

              <Nav.Link onClick={() => navigate('/formpost')}>Submit</Nav.Link>
              <i className="fa-solid fa-user" style={{ marginTop: "13px", marginLeft:14 }} />
              
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/Login')}>
                  <i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
                  Sing In
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/signup')}>
                  <i class="fa-solid fa-user-plus"></i>Sing Up{" "}
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => navigate('/')}>
                  {" "}
                  <i className="fa-sharp fa-solid fa-arrow-right-from-bracket" />
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
