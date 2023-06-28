import ideaGif from "../../assets/idea.gif";
import { StyledText1, StyledText2 } from "../../styles/typography";
import { BsEnvelopePaperFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { ContactContainer, SectionContainer, ContainerIcons } from "./style";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <StyledText1> Contato </StyledText1>

      <SectionContainer>
        <StyledText2>Teve uma ideia? Vamos tornar realidade !</StyledText2>

        <img src={ideaGif} />

        <StyledText2> Contacte me por: </StyledText2>

        <ContainerIcons>
          <li>
            <a
              href="https://www.linkedin.com/in/nicole-pimenta/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={30} color="#343a40" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/nicole-pimenta"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={30} color="#343a40" />
            </a>
          </li>

          <li>
            {" "}
            <a href="mailto:nicole.pimenta.dev@gmail.com">
              <BsEnvelopePaperFill size={30} color="#343a40" />
            </a>
          </li>
        </ContainerIcons>
      </SectionContainer>
    </ContactContainer>
  );
};

export default Contact;
