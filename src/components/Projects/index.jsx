import { StyledText1, StyledText3 } from "../../styles/typography";
import {
  ProjectsContainer,
  GridProjects,
  StyledProject,
  GithubButton,
} from "./style";
import project1 from "../../assets/projeto1.png";
import project2 from "../../assets/projeto2.png";

import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <ProjectsContainer ProjectsContainer id="projects">
      <StyledText1>Projetos</StyledText1>

      <GridProjects>
        <StyledProject>
          <StyledText3> YourBudget</StyledText3>

          <section>
            <img src={project1} alt="" />
          </section>
        </StyledProject>

        <StyledProject>
          <StyledText3>BooksList</StyledText3>

          <section>
            <img src={project2} alt="" />
          </section>
        </StyledProject>
      </GridProjects>

      <GithubButton>
        <BsGithub size={20} color="white" />
        <a href="https://github.com/nicole-pimenta" target="_blank">
          Veja Mais
        </a>
      </GithubButton>
    </ProjectsContainer>
  );
};

export default Projects;
