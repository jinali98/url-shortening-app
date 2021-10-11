import styled from "styled-components";
import img from "../../assets/bg-boost-desktop.svg";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  background-color: hsl(257, 27%, 26%);
  height: 30vh;
  color: hsl(0, 0%, 95%);
  padding: 60px 40px;
  background-image: url(${img});

  h2 {
    font-size: 35px;
  }
`;
