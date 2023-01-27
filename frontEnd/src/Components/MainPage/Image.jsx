import { useApp } from "../../AppContext";

export const Image = ({ kitty }) => {
  const { screenSize } = useApp();

  const imageStyles = {
    width: "100%",
    height: screenSize === "small" ? "144px" : "233px",
    zIndex: "2",
    borderRadius: "15px",
    position: "relative",
  };

  return (
    <img
      src={`./Images/${kitty.imageFileName}`}
      alt="kitty photo"
      style={imageStyles}
    />
  );
};
