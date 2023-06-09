import css from "../../assets/skills/css.svg";
import git from "../../assets/skills/git.svg";
import html from "../../assets/skills/html.svg";
import js from "../../assets/skills/javascript.svg";
import next from "../../assets/skills/next.svg";
import node from "../../assets/skills/node.svg";
import react from "../../assets/skills/react.svg";
import sass from "../../assets/skills/sass.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import ts from "../../assets/skills/typescript.svg";
import { StyledText1 } from "../../styles/typography";
import {
  AboutContainer,
  AboutMeSection,
  SkillsSection,
  SkillsList,
} from "./style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutMeSection>
        <StyledText1>Sobre mim</StyledText1>
        <div>
          <p>
            Sou Recifense mas atualmente resido em São Paulo, como
            desenvolvedora sou apaixonada por agregar valor aos negócios por
            meio da tecnologia. Adoro o desafio de encontrar soluções criativas
            para os problemas e gosto de colaborar com equipes para alcançar
            grandes resultados.
          </p>
          <p>
            Atuo há 2 anos com desenvolvimento web front end, com sólidos
            conhecimentos em HTML, CSS, Javascript, JQuery, React e TypeScript.
            Dedico-me a manter-me atualizada com as últimas tecnologias e
            tendências para fornecer as melhores soluções web , meu objetivo
            final é criar um software que seja amigável, resposível e impactante
            para atender as demandas dos clientes.
          </p>
        </div>
      </AboutMeSection>

      <SkillsSection>
        <StyledText1>Habilidades</StyledText1>

        <SkillsList>
          <li>
            <img src={html} alt="html-image" />
            HTML
          </li>
          <li>
            <img src={css} alt="css-image" />
            CSS
          </li>

          <li>
            <img src={js} alt="javascript-image" /> Javascript
          </li>
          <li>
            {" "}
            <img src={react} alt="react-image" />
            React
          </li>
          <li>
            {" "}
            <img src={ts} alt="typescript-image" />
            Typescript
          </li>

          <li>
            <img src={next} alt="next-image" /> Next
          </li>
          <li>
            <img src={tailwind} alt="tailwind-image" />
            Tailwind
          </li>
          <li>
            <img src={node} alt="node-image" /> Node
          </li>
          <li>
            <img src={git} alt="git-image" /> Git/ Github
          </li>
          <li>
            <img src={sass} alt="sass-image" />
            Sass
          </li>
        </SkillsList>
      </SkillsSection>
    </AboutContainer>
  );
};

export default About;
