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
  width: 50%;
  padding: 20px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li,
  a {
    color: var(--color-grey-3);
    font-size: var(--text-1);
    font-weight: 400;
    line-height: 2.25rem;
    border: 2px solid transparent;
  }

  li:hover {
    border-bottom: 2px solid white;
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    a {
      font-size: var(--text-2);
      font-weight: 500;
      line-height: 1rem;
      color: var(--color-grey-6);
    }
  }
`;
