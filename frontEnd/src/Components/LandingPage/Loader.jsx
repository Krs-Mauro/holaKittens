import { useRef, useState, useEffect } from "react";

import { useApp } from "../../AppContext";

export const Loader = () => {
  const { loading, setIsInMain, screenSize } = useApp();
  const [coordinates, setCoordinates] = useState([null, null]);
  const position = useRef();

  const handleClick = () => setIsInMain(true);

  useEffect(() => {
    if (position.current) {
      const { left, top } = position.current.getBoundingClientRect();
      setCoordinates([position.current.offsetLeft, position.current.offsetTop]);
    }
  }, [position]);

  const yellowStyles = {
    borderRadius: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: screenSize === "small" ? "120px" : "240px",
    height: screenSize === "small" ? "120px" : "240px",
    background: `radial-gradient(
      50% 50% at 50% 50%,
      #ffcf84 50%,
      #ffe5bc 86.46%,
      #ffcf84 100%
    )`,
  };

  const darkStyles = {
    width: screenSize === "small" ? "90px" : "180px",
    height: screenSize === "small" ? "90px" : "180px",
    backgroundColor: "#2c2031",
    color: "white",
    zIndex: "2",
    borderRadius: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const spanStyles = {
    position: "absolute",
    zIndex: 1,
    width: 0,
    height: 0,
    left: `${
      screenSize === "small" ? coordinates[0] + 60 : coordinates[0] + 70
    }px`,
    top: `${
      screenSize === "small" ? coordinates[1] + 60 : coordinates[1] - 20
    }px`,
    borderLeft: "50px solid transparent",
    borderRight: `${screenSize === "small" ? 3 : 5}0px solid transparent`,
    borderTop: `${screenSize === "small" ? "" : 1}40px solid #FDA4AF88`,
    animation: "rotation 5s linear infinite",
    transformOrigin: screenSize === "small" ? "0px 0px" : "50px 140px",
    display: loading ? "" : "none",
  };

  const textStyle = {
    overflow: "hidden",
    display: "block",
    margin: " 0 auto",
    animation: loading ? "expand 2.5s linear infinite" : "",
  };

  return (
    <div style={yellowStyles} ref={position}>
      <span style={spanStyles}></span>
      <div
        style={darkStyles}
        className="LoaderButton circle pointer zIndex2"
        onClick={handleClick}
      >
        <p style={textStyle}>{loading ? "Cargando..." : "Vamos!"}</p>
      </div>
    </div>
  );
};
