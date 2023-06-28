import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 76rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 90vh;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media only screen and (max-width: 1024px) {
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const GridProjects = styled.div`
  width: 90%;
  height: 100%;
  padding: 20px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 913px) {
    width: 100%;
  }
`;

export const StyledProject = styled.div`
  background-color: var(--background-2);
  box-shadow: 0 3px 6px #0003;
  width: 50%;
  height: 400px;

  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  section {
    height: 90%;

    padding: 20px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0 3px 6px #0003;
    }
  }
  @media only screen and (max-width: 913px) {
    width: 90%;
    height: 20%;
  }
`;

export const GithubButton = styled.button`
  height: 60px;
  width: 220px;
  color: var(--color-grey-6);
  background-color: var(--background-2);
  -webkit-box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);

  box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);
  border-radius: 50px;
  font-size: var(--text-2);
  font-weight: 300;
  padding: 10px;

  a {
    color: inherit;
    width: 50%;
    margin-left: 10px;
  }
`;
