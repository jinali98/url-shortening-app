import React, { useEffect, useState } from "react";
import UsefetchData from "../../hooks/use-fetchData";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Loading from "../LoadingSpinner/Loading";
import Input from "./Input";
import { MainContainerWrapper } from "./MainContainer.styles";
import UrlList from "./UrlList";

const MainContainer = () => {
  const [inputURL, setInputURL] = useState("");

  // custom hook to fetch data
  const [loading, shortedUrl, fetchError] = UsefetchData(inputURL);

  // set the inputURL back to "" after getting the shorted url
  useEffect(() => {
    setInputURL("");
  }, [inputURL]);

  // get the submitted input url from the input.js
  const getURL = (userEnteredURL) => {
    setInputURL(userEnteredURL);
  };
  return (
    <MainContainerWrapper id="urlShorten">
      <Input userInput={getURL} />
      {<ErrorMsg fetchError={fetchError} />}
      {loading && <Loading />}
      <UrlList urlData={shortedUrl} />
    </MainContainerWrapper>
  );
};

export default MainContainer;
