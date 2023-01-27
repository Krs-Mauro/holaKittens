import { useState } from "react";
import { BackContent } from "./BackContent";
import { FrontContent } from "./FrontContent";
import { useApp } from "../../AppContext";

const Card = ({ kitty }) => {
  const [isFront, setIsFront] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { screenSize } = useApp();

  const handleEnter = () => {
    setIsHighlighted(true);
    setIsFront(true);
  };

  const handleLeave = () => {
    setIsHighlighted(false);
    setIsFront(false);
  };

  return (
    <div
      className={screenSize === "small" ? "pointer mini-card" : "pointer card"}
      style={{ zIndex: `${99999999 + kitty.id * (isHighlighted ? 1 : -1)}` }}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
    >
      <div className="shadow inner-card">
        <FrontContent kitty={kitty} isFront={isFront} />
        <BackContent kitty={kitty} isFront={isFront} />
      </div>
    </div>
  );
};

export default Card;
