import styled from "styled-components";

export const SectionContact = styled.section`
  height: 65vh;
  margin-top: 150px;

  @media only screen and (max-width: 600px) {
    height: 60vh;
    margin-top: 15px;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  @media only screen and (max-width: 600px) {
    gap: 1rem;

    p {
      width: 90%;
      font-size: var(--text-3);
    }
  }
`;
