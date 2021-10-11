import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  margin: 30px 0;
  height: 80vh;
`;
export const HeaderContainer = styled.div`
  width: 40%;
  h1 {
    font-size: 65px;
    line-height: 1.2;
    text-align: left;
    font-weight: 800;
  }
  p {
    padding: 20px 0;
    font-size: 22px;
    color: hsl(0, 0%, 75%);
    font-weight: 700;
  }
`;

export const ImageContainer = styled.div`
  width: 35%;
`;
