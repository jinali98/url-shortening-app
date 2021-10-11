import React from "react";
import { Cardlayout } from "./Card.styles";

const Card = (props) => {
  return <Cardlayout className={props.className}>{props.children}</Cardlayout>;
};

export default Card;
