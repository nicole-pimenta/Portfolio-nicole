import styled from "styled-components";

export const SectionAboutMe = styled.section`
  height: 90vh;

  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const StyledDivFlex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.25rem;

  @media only screen and (max-width: 913px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AboutMeSection = styled.section`
  width: 45%;
  text-align: justify;
  line-height: 2.3rem;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    line-height: 2.5rem;
    height: 46%;
    padding: 20px;
    overflow: auto;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60%;
  gap: 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 2.5rem;
    width: 5.5rem;
  }

  @media only screen and (max-width: 913px) {
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
