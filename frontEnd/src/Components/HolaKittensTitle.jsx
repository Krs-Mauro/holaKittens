import { useApp } from "../AppContext";

export const HolaKittensTitle = () => {
  const { screenSize } = useApp();

  const titleStyle = {
    fontSize: screenSize === "big" ? "8vw" : "12vw",
    margin: "6vw 3vw 2vw 0",
  };

  return (
    <h1 style={titleStyle}>
      Hola <br /> Kittens
    </h1>
  );
};
