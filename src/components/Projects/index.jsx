import { StyledText1 } from "../../styles/typography";
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
          <p> YourBudget</p>

          <section>
            <img src={project1} alt="" />
          </section>
        </StyledProject>

        <StyledProject>
          <p>BooksList</p>

          <section>
            <img src={project2} alt="" />
          </section>
        </StyledProject>
      </GridProjects>

      <GithubButton>
        <BsGithub size={20} color="white" />
        <a>Veja Mais</a>
      </GithubButton>
    </ProjectsContainer>
  );
};

export default Projects;
