import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbSeo} from "react-icons/tb"
import { FaFunnelDollar } from "react-icons/fa"
import { GoMegaphone } from "react-icons/go"
import { RxRocket } from "react-icons/rx"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaFunnelDollar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSeo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GoMegaphone />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RxRocket />
      </Col>
    </Row>
  )
}

export default Techstack;
