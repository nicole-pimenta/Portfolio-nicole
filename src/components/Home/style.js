import styled from "styled-components";

export const SectionHome = styled.section`
  height: 60vh;

  @media only screen and (max-width: 913px) {
    height: 80vh;
  }
`;

export const StyledDivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.25rem;

  @media only screen and (max-width: 913px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledGif = styled.img`
  height: 70px;
  width: 70px;
`;

export const StyledHeadline = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 80%;

  @media only screen and (max-width: 600px) {
    gap: 1rem;
    width: 100%;

    p {
      width: 90%;
      font-size: var(--text-2);
      font-weight: 400;
    }

    h1 {
      font-size: var(--title-3);
      line-height: 2.5rem;
    }
  }
`;

export const StyledImageProfile = styled.img`
  border-radius: 50%;
  height: 600px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    height: 180px;
  }
`;

export const StyledTypedContainer = styled.div`
  height: 80px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-2);
`;

export const ContainerIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 95%;
    font-size: 30;
    padding: 40px;
  }
`;
