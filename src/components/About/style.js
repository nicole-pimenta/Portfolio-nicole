import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 76rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 80vh;

  margin: 20px auto;

  display: flex;

  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  @media only screen and (max-width: 1024px) {
    height: 95%;
    height: 100vh;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AboutMeSection = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    padding: 20px;
    text-align: justify;
    line-height: 2rem;
    height: 95%;
  }
  @media only screen and (max-width: 1024px) {
    width: 90%;
    line-height: 2.5rem;
    height: 46%;
    padding: 20px;
    overflow: auto;
  }
`;

export const SkillsSection = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 90%;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 2.5rem;
    width: 5.5rem;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    gap: 20px;
    height: 80%;

    li {
      width: 45%;
    }

    img {
      height: 1.5rem;
      width: 2.5rem;
    }
  }
`;
