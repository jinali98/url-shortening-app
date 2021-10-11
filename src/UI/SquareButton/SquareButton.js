import React from "react";
import { Button } from "./SquareButton.styles";

const SquareButton = (props) => {
  return (
    <Button
      className={props.className}
      type={props.type}
      onClick={props.buttonHandler}
    >
      {props.children}
    </Button>
  );
};

export default SquareButton;
