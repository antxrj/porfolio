import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bioparque from "../../Assets/Projects/bioparque.jpg";
import match from "../../Assets/Projects/match.png";
import cel from "../../Assets/Projects/cel.jpg"
import hipo from "../../Assets/Projects/hipo.jpg"
import dasa from "../../Assets/Projects/dasa.jpg"
import b9 from "../../Assets/Projects/b9.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
       Confira alguns trabalhos
        </h1>
        <p style={{ color: "white" }}>
        O <strong className="purple">melhor amigo</strong> do gestor de tráfego e do diretor de arte.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bioparque}
              isBlog={false}
              title="BioParque do Rio 1 ano"
              description="KV do primeiro aniversário do BioParque do Rio. Mote criativo e redação desenvolvidos em parceria com direção de arte. Trabalho para todos os formatos. Da Big Ideia aos desdobramentos offline e digital, incluindo Meta Ads e Google Ads."
              link="https://drive.google.com/file/d/1KVQQIFGel-0qYZ66xpHai7fpY36NKld0/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={match}
              isBlog={false}
              title="Deu Match"
              description="Uma campanha. Dois produtos totalmente diferentes. Ideia partiu de um conceito simples, mas que tá na cabeça da geração Z: o primeiro passo para ter sorte no amor é DAR MATCH, assim com o combo perfeito entre o Aquario + Cristo Redentor. Trabalho envolveu toda a criação da campanha em conjnunto com os diretores de arte, os desdobramentos para social media, publicidade digital e ação integrada via e-mail marketing."
              link="https://drive.google.com/file/d/1MPJvk3XXw4EXP9xEudL7rQZddmL5sqpw/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cel}
              isBlog={false}
              title="OOH"
              description="Campanha institucional do CEL Intercultural School. Objetivo era dar mais visibilidade às unidades da escola no Jardim Botânico/RJ. O conceito também apresenta uma nova identidade visual. Para isso, pensamos em trazer personagens que exemplificassem o mote 'Da creche às melhores universidades'. Nesse projeto, além da redação para mídias do bairro, como bancas e jornais locais, coordenei o shooting que serviu de base para os desdobramentos."
              link="https://drive.google.com/file/d/1eZEX0Iz0lJ2gPV0D6-YUDC0h0FUyV9B3/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hipo}
              isBlog={false}
              title="Viral Peso-Pesado"
              description="Celebridades. Projeto de comunicação 360 para o mês dos namorados do BioParque do Rio. A Big Idea partiu do casal de hipopótamos Tim e Bocão. O objetivo era atrair mais visitantes para o parque. A partir daí foi elaborado um plano com ações multiplataforma. Uma série no YouTube e Blog, storytelling nativo para as redes sociais, publicidade, PR e campanha via automação de marketing. Até um clone da Lock Bridge de Paris foi inaugurado por lá. O resultado não poderia ser diferente. Viralizou nas redes sociais, gerou repercussão na imprensa e engajamento do público que fez questão de ir até o local registrar o momento."      link="https://www.instagram.com/p/Ce646Kojqkn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dasa}
              isBlog={false}
              title="Caçador de boas histórias"
              description="Mais do que release é relacionamento. PR para marcas como Dasa, Sinergia Educação, Startup Weekend e Endeavor. Gerenciamento de crise, treinamento de porta-vozes, Q&A, approach com jornalistas e gestão de campanhas com influenciadores. Visão estratégica para construir e proteger a reputação da sua empresa. A imagem traz um case de sucesso da equipe do Hospital São Lucas Copacabana @ Dasa."
              link="https://drive.google.com/drive/folders/1v0HlG6-Sfx_LuooruagjA7Ishmx7a6wG?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b9}
              isBlog={false}
              title="Hard & Soft News"
              description="Faro para notícia. Redação ágil, com apuração detalhada e precisa. Mais de 5 anos de atuação no jornalismo com passagens pela Globo.com, B9, AndroidPit e iniciativas do terceiro setor como o FaveladaRocinha.com. Cobertura de eventos inloco e de forma remota, como Apple WWDC, Google I/O e CES."
              link="https://drive.google.com/drive/folders/1y_FyfXaoXEwjQxtk_E1bA7PY2S2thySl?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
