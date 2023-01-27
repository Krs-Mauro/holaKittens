import { MaleIcon } from "./MaleIcon";
import { FemaleIcon } from "./FemaleIcon";
import { Image } from "./Image";
import { useApp } from "../../AppContext";

export const FrontContent = ({ kitty, isFront }) => {
  const { screenSize } = useApp();
  const subtitleStyle = {
    color: "#881337",
    fontSize: "2rem",
    margin: screenSize === "small" ? "1rem 0 0 1rem" : "1rem 0 0 2rem",
    zIndex: "2",
  };

  const paragraphStyle = { zIndex: "2", marginLeft: "2rem", fontWeight: "600" };

  setTimeout(() => {}, 800);
  return (
    <div className="card-front">
      <Image kitty={kitty} />
      <h3 style={subtitleStyle}> {kitty.name.toLowerCase()} </h3>
      {screenSize === "big" && <p style={paragraphStyle}> {kitty.age} </p>}
      {kitty.gender === "male" ? (
        <MaleIcon isFront={isFront} />
      ) : (
        <FemaleIcon isFront={isFront} />
      )}
    </div>
  );
};
