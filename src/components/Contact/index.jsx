import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ideaGif from "../../assets/idea.gif";
import { StyledText1 } from "../../styles/typography";
import { SectionContact, SectionContainer } from "./style";

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
    <SectionContact id="contact">
      <div className="container">
        <StyledText1> Contato </StyledText1>

        <SectionContainer>
          <StyledText1>Teve uma ideia? </StyledText1>

          <img src={ideaGif} />

          <p> Vamos tornar realidade ! Contacte me pelo: </p>

          <StyledText1 ref={el} />
        </SectionContainer>
      </div>
    </SectionContact>
  );
};

export default Contact;
