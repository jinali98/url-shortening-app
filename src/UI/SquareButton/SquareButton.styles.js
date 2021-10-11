import styled from "styled-components";

export const Button = styled.button`
  height: 2.5rem;
  padding: 0.2rem 1.5rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: hsl(0, 0%, 95%);
  background-color: hsl(180, 66%, 49%);
  border: none;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 66%, 69%);
  }

  &.copy,
  &.copied {
    height: 2rem;
    font-size: 16px;
    padding: 0.2rem 1rem;
    width: 6rem;
  }

  &.copied {
    background-color: hsl(257, 27%, 26%);
  }

  &.remove {
    background-color: hsl(0, 0%, 95%);
    color: hsl(257, 27%, 26%);
    font-weight: 800;
    height: 2rem;
    width: 1rem;
    text-align: left;
    padding-left: 8px;

    &:hover {
      background-color: hsl(257, 27%, 26%);
      color: hsl(0, 0%, 95%);
    }
  }
`;
