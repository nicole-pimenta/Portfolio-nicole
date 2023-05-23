import logo from "../../assets/logoNicole.png";
import { StyledDivFlexRow } from "../../styles/position";
import { ContainerHeader, StyledHeader, StyledNavBar } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <StyledDivFlexRow>
          <img src={logo} />
          <StyledNavBar>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </StyledNavBar>
        </StyledDivFlexRow>
      </ContainerHeader>
    </StyledHeader>
  );
};

export default Header;
