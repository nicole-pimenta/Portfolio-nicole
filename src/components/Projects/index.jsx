import { StyledText1 } from "../../styles/typography";
import { ContainerProjects, SectionProjects, StyledProject } from "./style";

const Projects = () => {
  return (
    <SectionProjects id="projects">
      <div className="container">
        <StyledText1>Projetos</StyledText1>

        <ContainerProjects>
          <StyledProject></StyledProject>
          <StyledProject></StyledProject>
          <StyledProject></StyledProject>
          <StyledProject></StyledProject>
        </ContainerProjects>
      </div>
    </SectionProjects>
  );
};

export default Projects;
