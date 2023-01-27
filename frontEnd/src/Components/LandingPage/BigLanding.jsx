import { HolaKittensTitle } from "../HolaKittensTitle";
import { RedCat } from "./RedCat";
import { Loader } from "./Loader";

export const BigLanding = ({ screenSize }) => {
  const displayStyles = { display: "flex", maxWidth: "1250px" };

  const innerLandingStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "0 4vw 0 0",
  };

  return (
    <div style={displayStyles}>
      <div style={innerLandingStyles}>
        <HolaKittensTitle />
        <Loader />
      </div>
      <RedCat />
    </div>
  );
};
