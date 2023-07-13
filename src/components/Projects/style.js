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
