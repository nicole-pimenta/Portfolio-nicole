import styled from "styled-components";

export const SectionProjects = styled.section`
  height: 75vh;

  @media only screen and (max-width: 600px) {
    height: 130vh;
  }
`;

export const ContainerProjects = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 1rem;
`;

export const StyledProject = styled.div`
  background-color: var(--background-2);
  box-shadow: 0 3px 6px #0003;
  width: 460px;
  height: 300px;
  border-radius: 5px;

  @media only screen and (max-width: 913px) {
    height: 250px;
  }
`;
