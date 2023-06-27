import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ideaGif from "../../assets/idea.gif";
import { StyledText1, StyledText2 } from "../../styles/typography";
import { ContactContainer, SectionContainer } from "./style";

const Contact = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["nicole.pimenta.dev@gmail.com"],
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
    <ContactContainer id="contact">
      <StyledText1> Contato </StyledText1>

      <SectionContainer>
        <StyledText2>Teve uma ideia? Vamos tornar realidade !</StyledText2>

        <img src={ideaGif} />

        <StyledText2> Contacte me pelo: </StyledText2>

        <span ref={el} />
      </SectionContainer>
    </ContactContainer>
  );
};

export default Contact;
