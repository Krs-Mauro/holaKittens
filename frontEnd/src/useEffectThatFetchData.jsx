import { useEffect } from "react";

const useEffectThatFetchData = (setLoading, setkittens) => {
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5522/").then((response) =>
      response.json().then((data) => {
        setkittens(data);
        setLoading(false);
      })
    );
  }, []);
};

export default useEffectThatFetchData;
