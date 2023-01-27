import { HolaKittensTitle } from "../HolaKittensTitle";
import { RedCat } from "./RedCat";
import { Loader } from "./Loader";

export const SmallLanding = ({ screenSize }) => {
  const displayStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  const innerLandingStyles = {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    width: "100%",
  };

  return (
    <div style={displayStyles}>
      <HolaKittensTitle />
      <div style={innerLandingStyles}>
        <Loader />
        <RedCat />
      </div>
    </div>
  );
};
