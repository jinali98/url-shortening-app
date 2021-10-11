import React from "react";
import RoundButton from "../../UI/RoundButton/RoundButton";
import { FooterWrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Boost your links today</h2>
      <RoundButton className="footerButton">Get Started</RoundButton>
    </FooterWrapper>
  );
};

export default Footer;
