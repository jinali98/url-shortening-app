import { useEffect, useState } from "react";

const UsefetchData = (url = "") => {
  const [loading, setLoading] = useState(false);
  const [shortedUrl, setShortendUrl] = useState({});
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    if (url !== "") {
      setLoading(true);
      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response) => {
          setLoading(false);
          if (!response.ok) throw new Error("Something went Wrong!!");

          return response.json();
        })
        .then((shortedUrlData) => {
          setShortendUrl({
            id: shortedUrlData.result.code,
            generated: shortedUrlData.result.short_link,
            userEntered: shortedUrlData.result.original_link,
          });
        })
        .catch((error) => {
          setLoading(false);
          setFetchError(error.message);
        });
    }
  }, [url]);

  return [loading, shortedUrl, fetchError];
};

export default UsefetchData;
