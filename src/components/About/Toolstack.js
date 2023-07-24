import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImWordpress } from "react-icons/im";
import { MdOutlineHtml } from "react-icons/md";
import { BsMeta } from "react-icons/bs"
import { SiAdobepremierepro, SiHotjar, SiHubspot, SiMicrosoftoffice } from "react-icons/si"
import { AiOutlineGoogle } from "react-icons/ai"





function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineGoogle  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ImWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMeta />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHubspot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHotjar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro  />
      </Col>
    </Row>
  );
}

export default Toolstack;
