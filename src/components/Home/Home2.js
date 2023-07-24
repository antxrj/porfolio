import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO<span className="purple"> SOBRE </span> MIM
            </h1>
            <p className="home-about-body">
              Redator, publicitário, analista de marketing. Comunicação para encantar, engajar, converter... 
              e, claro, sem deixar a diversão de lado. 🤷‍♂️
              <br />
              <br />Tenho experiência em produção de conteúdo para diversos formatos e canais:
                <b className="purple"> Jornalismo </b>, <b className="purple"> Inbound Marketing </b>,  <b className="purple"> Social Media </b> e <b className="purple"> Assessoria de Imprensa </b>.
              <br />
              <br />
               Meus interesses em <b className="purple">Marketing</b> e <b className="purple"> Comunicação</b> estão em áreas como 
                {" "}
                <b className="purple"> Automação</b>, <b className="purple"> Ads </b>, <b className="purple"> SEO </b>, <b className="purple"> UX Writing </b> e <b className="purple"> Growth
                </b>.
              <br />
              <br />
              Sou certificado em  <b className="purple">RD Station</b>,
              
                <b className="purple">
                  {" "}
                  Hubspot
                </b> e 
                <b className="purple"> Content Marketing </b>. Também tenho habilidade em ferramentas como
                <b className="purple"> Google Analytics </b> , <b className="purple"> Search Console</b>  e <b className="purple">SEM Rush</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Conecte-se comigo</h1>
            <p>
              Qual <span className="purple"><b>REDE</b> </span> você está?
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/gabriel.ribeiro.351/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/gribeiro90"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/g4brielribeiro/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gabrielribeiro552/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
