import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn't Fetch the data for that resource!");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
