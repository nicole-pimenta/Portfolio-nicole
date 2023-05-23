import styled from "styled-components";

export const SectionAboutMe = styled.section`
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const StyledDivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.25rem;

  @media only screen and (max-width: 913px) {
    flex-direction: column;
  }
`;

export const AboutMeSection = styled.section`
  width: 50%;
  text-align: justify;
  line-height: 1.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    line-height: 1.5rem;
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
      height: 2.5rem;
      width: 3.5rem;
    }
  }
`;
