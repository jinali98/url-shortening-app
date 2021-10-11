import React from "react";
import useInput from "../../hooks/use-input";
import Card from "../../UI/Card/Card";
import SquareButton from "../../UI/SquareButton/SquareButton";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { InputWrapper } from "./Input.styles";

const Input = (props) => {
  //get values from useInput custom hook
  const [
    inputValue,
    blur,
    focus,
    error,
    submitURLHandler,
    inputBlurHandler,
    inputChangehandler,
    inputFocusHandler,
  ] = useInput(props);

  return (
    <Card className="inputBg">
      <InputWrapper onSubmit={submitURLHandler}>
        <input
          type="text"
          placeholder="shorten a link here.."
          value={inputValue}
          onChange={inputChangehandler}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
        />
        <SquareButton type="submit">Shorten it!</SquareButton>
      </InputWrapper>
      {/* error handeling */}
      <ErrorMsg focus={focus} blur={blur} error={error} />
    </Card>
  );
};

export default Input;
