import { useApp } from "../../AppContext";
import { MaleIcon } from "./MaleIcon";
import { FemaleIcon } from "./FemaleIcon";
import { Image } from "./Image";

export const BackContent = ({ kitty, isFront }) => {
  const { screenSize } = useApp();
  const paragraphStyle =
    screenSize === "big"
      ? {
          zIndex: "2",
          margin: "1rem 1rem 2rem 2rem",
          overflow: "scroll",
          height: "120px",
        }
      : {
          zIndex: "2",
          margin: "0.5rem",
          overflow: "scroll",
          height: "75px",
          fontSize: "1rem",
        };

  return (
    <div className="card-back">
      <Image kitty={kitty} />
      <p style={paragraphStyle}> {kitty.description} </p>
      {kitty.gender === "male" ? (
        <MaleIcon isFront={isFront} />
      ) : (
        <FemaleIcon isFront={isFront} />
      )}
    </div>
  );
};
