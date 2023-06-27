import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 76rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 90vh;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1024px) {
    height: 80vh;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  img {
    height: 180px;
    border-radius: 8px;
  }

  p {
    font-weight: 400;
    font-size: var(--text-3);
  }

  span {
    font-size: var(--text-2);
    font-weight: 600;
    line-height: 2rem;
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
    img {
      width: 80%;
    }

    p {
      width: 90%;

      font-size: var(--text-3);
    }
  }
`;
