import { useEffect, useRef } from "react";
import { BsEnvelopePaperFill, BsGithub, BsLinkedin } from "react-icons/bs";
import Typed from "typed.js";
import handShake from "../../assets/handshake.gif";
import profile from "../../assets/profile.jpg";
import { StyledText1, StyledTitle1 } from "../../styles/typography";
import {
  ContainerIcons,
  SectionHome,
  StyledDivFlex,
  StyledGif,
  StyledHeadline,
  StyledImageProfile,
  StyledTypedContainer,
} from "./style";

import cv from "../../assets/_CV_Fullstack_NicolePimenta.pdf";

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Desenvolvedora full stack",
        "Adoro aprender coisas novas...",
        "Transformando sites em soluções digitais!",
      ],
      typeSpeed: 120,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <SectionHome id="home">
      <div className="container">
        <StyledDivFlex>
          <StyledHeadline>
            <StyledText1>
              Olá !
              <StyledGif src={handShake} align="center" />
              Meu nome é
            </StyledText1>

            <StyledTitle1>Nicole Pimenta</StyledTitle1>

            <StyledTypedContainer>
              <StyledText1 ref={el} />
            </StyledTypedContainer>
            <ContainerIcons>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicole-pimenta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin size={50} color="#343a40" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/nicole-pimenta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={50} color="#343a40" />
                </a>
              </li>

              <li>
                {" "}
                <a href={cv} target="_blank" rel="noreferrer">
                  <BsEnvelopePaperFill size={50} color="#343a40" />
                </a>
              </li>
            </ContainerIcons>
          </StyledHeadline>

          <StyledImageProfile src={profile} alt="imagem profile Nicole" />
        </StyledDivFlex>
      </div>
    </SectionHome>
  );
};

export default Home;
