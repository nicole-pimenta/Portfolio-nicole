import { useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import Typed from "typed.js";
import handShake from "../../assets/handshake.gif";
import profile from "../../assets/profile.jpg";
import { StyledTitle1, StyledTitle2 } from "../../styles/typography";
import {
  HomeContainer,
  StyledGif,
  StyledHeadline,
  StyledImageProfile,
  StyledTypedContainer,
  StyledTypedText,
  DownloadButton,
} from "./style";

import cv from "../../assets/NicolePimentaCV.pdf";

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Desenvolvedora front end",
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
    <HomeContainer id="home">
      <StyledHeadline>
        <StyledTitle2>
          Olá !
          <StyledGif src={handShake} align="center" />
          Meu nome é
        </StyledTitle2>

        <StyledTitle1>Nicole Pimenta</StyledTitle1>

        <StyledTypedContainer>
          <StyledTypedText ref={el} />
        </StyledTypedContainer>

        <DownloadButton>
          <BsDownload size={20} color="white" />
          <a href={cv} download>
            Baixar currículo
          </a>
        </DownloadButton>
      </StyledHeadline>

      <StyledImageProfile>
        <img src={profile} alt="imagem profile Nicole" />
      </StyledImageProfile>
    </HomeContainer>
  );
};

export default Home;
