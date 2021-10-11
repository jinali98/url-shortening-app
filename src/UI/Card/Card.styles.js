import styled from "styled-components";
import img from "../../assets/bg-shorten-desktop.svg";

export const Cardlayout = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;

  &.inputBg {
    background: hsl(257, 27%, 26%);
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    width: 75%;
    margin: 50px auto;
    height: 10rem;
    background-image: url(${img});

    /* form {
      width: 90%;
      display: flex;
      margin: auto;
      margin-top: 1rem;
      text-align: center;
      align-items: center;
      justify-content: space-around;

      input {
        width: 80%;
        height: 2.8rem;
        border-radius: 6px;
        padding: 1rem;
        font-weight: 600;
        border: none;
        outline: none;
      }
    } */
  }
  &.item {
    width: 75%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0%.5rem;

    div {
      margin-left: 1rem;
      width: 90%;
      display: flex;
      justify-content: space-between;

      p:nth-child(2) {
        color: hsl(180, 66%, 49%);
      }
    }
  }

  &.stat-card {
    width: 25%;
    padding-top: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
