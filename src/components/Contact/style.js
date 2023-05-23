import styled from "styled-components";

export const SectionContact = styled.section`
  height: 90vh;

  @media only screen and (max-width: 600px) {
    height: 90vh;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  margin-top: 5%;

  @media only screen and (max-width: 600px) {
    margin-top: 10%;

    img {
      width: 80%;
    }

    p {
      width: 90%;

      font-size: var(--text-3);
    }
  }
`;
