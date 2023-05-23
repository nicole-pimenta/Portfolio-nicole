import { StyledText3 } from "../../styles/typography";
import { StyledFooter } from "./style";

import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText3>
        {" "}
        Feito com{" "}
        <span>
          <BsHeartFill color="red" />{" "}
        </span>
        por Nicole Pimenta !
      </StyledText3>
    </StyledFooter>
  );
};

export default Footer;
