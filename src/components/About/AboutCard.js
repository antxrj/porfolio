import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Eu sou <span className="purple"> Gabriel Ribeiro.</span>  Pai do <b>Vicente</b> e do <b>Benjamim</b>, morador do RJ, flamenguista e churasqueiro de fim de semana.
          </p>
          <p style={{ textAlign: "justify" }}> Tenho mais de 7 anos de experiência em produção de conteúdo, PR, marketing e publicidade. </p>
          <p style={{ textAlign: "justify" }}> Além de tentar subir de nível nas canções de ninar, sou apaixonado por: </p>
          <ul>
            <li className="about-activity">
            🌐 Tecnologia
            </li>
            <li className="about-activity">
            🎥 Documentários
            </li>
            <li className="about-activity">
            🌊 Praia
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Entregue o máximo com o tempo e recursos disponíveis"{" "}
          </p>
          <footer className="blockquote-footer">Gabriel Ribeiro</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
