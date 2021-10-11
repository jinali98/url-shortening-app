import { useReducer } from "react";

const initialState = {
  inputValue: "",
  blur: false,
  focus: false,
  error: false,
};

const UrlReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return { ...state, inputValue: action.payLoad };
  }
  if (action.type === "INPUT_FOCUS") {
    return { ...state, focus: action.payLoad };
  }
  if (action.type === "INPUT_BLUR") {
    return { ...state, blur: action.payLoad };
  }
  if (action.type === "ERROR") {
    return { ...state, error: true };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  return state;
};
const useInput = (props) => {
  const [urlData, dispatch] = useReducer(UrlReducer, initialState);

  const { inputValue, blur, focus, error } = urlData;

  const submitURLHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      dispatch({ type: "ERROR" });
      return;
    }
    if (inputValue.trim() !== "") {
      props.userInput(inputValue);
      dispatch({ type: "RESET" });
    }
  };

  const inputChangehandler = (e) => {
    const inputUrl = e.target.value;
    dispatch({ type: "INPUT_CHANGE", payLoad: inputUrl });
  };

  const inputFocusHandler = (e) => {
    dispatch({ type: "RESET" });
    dispatch({ type: "INPUT_FOCUS", payLoad: true });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "INPUT_BLUR", payLoad: true });
  };
  return [
    inputValue,
    blur,
    focus,
    error,
    submitURLHandler,
    inputBlurHandler,
    inputChangehandler,
    inputFocusHandler,
  ];
};

export default useInput;
