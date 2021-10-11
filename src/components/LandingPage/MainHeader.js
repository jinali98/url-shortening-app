import React from "react";
import working from "../../assets/illustration-working.svg";
import RoundButton from "../../UI/RoundButton/RoundButton";
import {
  HeaderContainer,
  ImageContainer,
  MainWrapper,
} from "./MainHeader.styles";
const MainHeader = () => {
  return (
    <MainWrapper>
      <HeaderContainer>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#urlShorten">
          <RoundButton>Get Started</RoundButton>
        </a>
      </HeaderContainer>
      <ImageContainer>
        <img src={working} alt="mainImage" />
      </ImageContainer>
    </MainWrapper>
  );
};

export default MainHeader;
