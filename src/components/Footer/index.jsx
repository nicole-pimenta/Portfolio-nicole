import { StyledText3 } from "../../styles/typography";
import { StyledFooter } from "./style";

import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <StyledText3>
          {" "}
          Feito com{" "}
          <span>
            <BsHeartFill color="red" />{" "}
          </span>
          por Nicole Pimenta !
        </StyledText3>
      </div>
    </StyledFooter>
  );
};

export default Footer;
