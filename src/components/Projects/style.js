import styled from "styled-components";

export const SectionProjects = styled.section`
  height: 90vh;

  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const ContainerProjects = styled.div`
  width: 90%;
  height: 80%;
  position: relative;
  top: 30px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 913px) {
    width: 100%;
  }
`;

export const StyledProject = styled.div`
  background-color: var(--background-2);
  box-shadow: 0 3px 6px #0003;
  width: 45%;
  height: 45%;
  border-radius: 5px;

  @media only screen and (max-width: 913px) {
    width: 90%;
    height: 20%;
  }
`;
