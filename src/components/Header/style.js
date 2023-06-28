import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 1020;
  width: 100vw;
  background-color: var(--background-2);
  -webkit-box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 18px -7px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`;

export const ContainerHeader = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledNavBar = styled.nav`
  width: 45%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li,
  a {
    color: var(--color-grey-6);
    font-size: var(--text-2);
    font-weight: 500;

    border: 2px solid transparent;
  }

  li:hover {
    border-bottom: 2px solid var(--color-grey-3);
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    width: 75%;
    justify-content: center;

    a {
      line-height: 1rem;
      font-size: var(--text-3);
    }
  }
`;
