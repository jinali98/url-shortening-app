import styled from "styled-components";

export const HeadingContainer = styled.div`
  text-align: center;
  line-height: 2;
  margin-top: 55px;

  p {
    font-size: 18px;
    color: hsl(0, 0%, 75%);
    font-weight: 700;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  margin-bottom: 20px;
  position: relative;
  margin: 25px 0;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  background: hsl(257, 27%, 26%);
  width: 100px;
  height: 100px;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 80%;
    padding: 0;
    margin: 0;
  }
`;

export const CardHeading = styled.h3`
  text-align: left;
  margin: 20px 0;
  padding: 10px 0;
`;

export const CardParagraph = styled.p`
  font-size: 16px;
  color: hsl(0, 0%, 75%);
  font-weight: 600;
`;
