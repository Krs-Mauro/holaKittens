import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return windowSize;
};

export default useWindowSize;
