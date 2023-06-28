import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 76rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 1024px) {
    top: 5%;
    height: 95%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledGif = styled.img`
  height: 70px;
  width: 70px;
`;

export const DownloadButton = styled.button`
  height: 60px;
  width: 220px;
  color: white;
  background-color: var(--background-2);
  -webkit-box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);

  box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  font-size: var(--title-4);
  font-weight: 400;

  a {
    color: inherit;
    width: 50%;
    margin-left: 20px;
  }
`;

export const StyledTypedText = styled.p`
  font-family: "Finger Paint", cursive;
  font-size: var(--text-2);
  font-weight: 400;
  line-height: 2.5rem;
  color: var(--background-2);
  text-align: center;
`;

export const StyledHeadline = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 55%;
  height: 90%;

  @media only screen and (max-width: 1024px) {
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

export const StyledImageProfile = styled.section`
  width: 45%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    max-height: 100%;

    max-width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    height: 200px;
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
