import styled from "styled-components";

export const Button = styled.button`
  height: 2.5rem;
  padding: 0.2rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  color: hsl(0, 0%, 95%);
  background-color: hsl(180, 66%, 49%);
  border: none;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 66%, 69%);
  }

  &.loginButton {
    background-color: hsl(0, 0%, 95%);
    color: hsl(260, 8%, 14%);
    margin-right: 20px;
  }
  &.footerButton {
    width: 200px;
    padding: 0.7rem 2rem;
    margin: auto;
    margin-top: 15px;
  }
`;
