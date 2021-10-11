import { useEffect } from "react";

const UseUpdateStorage = (urlData) => {
  useEffect(() => {
    if (urlData.generated && urlData.userEntered) {
      let storedURL = [];
      //get the previously stored data
      const getStoredData = JSON.parse(localStorage.getItem("urlList"));
      // check if there is any previously stored data. if any add newdata to that re store
      if (getStoredData) {
        storedURL.push(...getStoredData);
        localStorage.removeItem("urlList");
        localStorage.setItem(
          "urlList",
          JSON.stringify([
            {
              id: urlData.id,
              userinput: urlData.userEntered,
              shortendUrl: urlData.generated,
            },
            ...storedURL,
          ])
        );

        // if no previous data create a new array of objects to store data in the local storage
      } else {
        localStorage.setItem(
          "urlList",
          JSON.stringify([
            {
              id: urlData.id,
              userinput: urlData.userEntered,
              shortendUrl: urlData.generated,
            },
          ])
        );
      }
    }
  }, [urlData]);

  return;
};

export default UseUpdateStorage;
