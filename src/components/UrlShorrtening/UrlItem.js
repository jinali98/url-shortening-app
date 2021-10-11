import React, { useState } from "react";
import UseCopiedToClipBoard from "../../hooks/use-copiedToClipBoard";
import Card from "../../UI/Card/Card";
import SquareButton from "../../UI/SquareButton/SquareButton";

const UrlItem = (props) => {
  // custom hook to copy to clipboard
  const [copyBtnClass, copyBtn, copyToClipboard] = UseCopiedToClipBoard();
  const [remove, setRemove] = useState(true);

  console.log("removed");

  const removeItem = () => {
    //get the previously stored data
    const getStoredData = JSON.parse(localStorage.getItem("urlList"));

    const afterRemoved = getStoredData.filter((each) => each.id !== props.id);
    localStorage.setItem("urlList", JSON.stringify(afterRemoved));
    props.removed(remove);
    setRemove(false);
  };

  return (
    <Card className="item">
      <div>
        <p>{props.enteredurl}</p>
        <p>{props.generatedurl}</p>
      </div>
      <SquareButton
        buttonHandler={() => copyToClipboard(props.generatedurl)}
        className={copyBtnClass}
      >
        {copyBtn}
      </SquareButton>

      <SquareButton className="remove" buttonHandler={removeItem}>
        X
      </SquareButton>
    </Card>
  );
};

export default React.memo(UrlItem);
