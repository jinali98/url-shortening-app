import React from "react";
import RoundButton from "../../UI/RoundButton/RoundButton";
import {
  AuthButtons,
  Logo,
  NavigationWrapper,
  Navigationbar,
} from "./NavigationBar.styles";

const NavigationBar = () => {
  return (
    <NavigationWrapper>
      <Navigationbar>
        <Logo>
          <p>Shortly</p>
        </Logo>
        <AuthButtons>
          <RoundButton className="loginButton">Login</RoundButton>
          <RoundButton>Sign Up</RoundButton>
        </AuthButtons>
      </Navigationbar>
    </NavigationWrapper>
  );
};

export default NavigationBar;
