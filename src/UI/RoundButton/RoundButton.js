import React from "react";
import { Button } from "./RoundButton.styles";

const RoundButton = (props) => {
  return <Button className={props.className}>{props.children}</Button>;
};

export default RoundButton;

// mouse hover cursor pointer
//
