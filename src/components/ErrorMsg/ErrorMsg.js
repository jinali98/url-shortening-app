import React from "react";
import { ErrorMsgWrapper } from "./ErrorMsg.styles";

const ErrorMsg = ({ focus, blur, error, fetchError }) => {
  return (
    <ErrorMsgWrapper>
      {(focus && blur) || error ? <p>*please add a valid URL</p> : " "}
      {fetchError && <p>{fetchError}</p>}
    </ErrorMsgWrapper>
  );
};

export default ErrorMsg;
