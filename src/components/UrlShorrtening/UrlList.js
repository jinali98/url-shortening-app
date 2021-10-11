import React, { useEffect, useState } from "react";
import UseUpdateStorage from "../../hooks/use-updateStorage";
import UrlItem from "./UrlItem";

const UrlList = ({ urlData }) => {
  const [urls, setUrls] = useState([]);
  const [remove, setRemove] = useState(false);
  //when the component render for the first time, get stored data from the localstorage if any
  useEffect(() => {
    const storedURL = JSON.parse(localStorage.getItem("urlList"));

    storedURL && setUrls([...storedURL]);
  }, []);

  // add the received data to the localStorage whenver urlData updated
  UseUpdateStorage(urlData);

  //update urls state whenerver the component receive a new urlData
  useEffect(() => {
    //get the current state from urls and add newly received data
    if (urlData.generated && urlData.userEntered) {
      setUrls((prev) => {
        setUrls([
          {
            id: urlData.id,
            userinput: urlData.userEntered,
            shortendUrl: urlData.generated,
          },
          ...prev,
        ]);
      });
    }
  }, [urlData]);

  const removed = (value) => {
    setRemove(value);
    console.log(remove);
  };

  return (
    <div>
      {urls?.map((each) => {
        return (
          <UrlItem
            key={each.id}
            id={each.id}
            enteredurl={each.userinput}
            generatedurl={each.shortendUrl}
            removed={removed}
          />
        );
      })}
    </div>
  );
};

export default React.memo(UrlList);
