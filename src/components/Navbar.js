import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io"
import {TbPhoneCall} from "react-icons/tb"
import {FaBlog} from "react-icons/fa"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/sobre"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/cases"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Cases
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/curriculo"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Currículo
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
  <Nav.Link
    href="https://blog.gabriel-ribeiro.com/?utm_source=site&utm_medium=organico&utm_campaign=Always"
    onClick={() => updateExpanded(false)}
    target="_blank"
   
  >
    <FaBlog style={{ marginBottom: "2px" }} /> Blog
  </Nav.Link>
</Nav.Item>


            <Nav.Item>
              <Button
                href="https://api.whatsapp.com/send/?phone=5521996332990&text=Oi%21+Vi+o+seu+portf%C3%B3lio+e+quero+entrar+em+contato.+Vamos+conversar%3F&type=phone_number&app_absent=0"
                target="_blank"
              >
                <TbPhoneCall style= {{ fontisize: "1.2em" }} /> {" "}
                <IoLogoWhatsapp style={{ fontSize: "1.2em" }} />{" "}
                
              </Button>
            </Nav.Item>      

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
