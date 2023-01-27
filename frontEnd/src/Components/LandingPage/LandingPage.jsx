import { useApp } from "../../AppContext";
import { SmallLanding } from "./SmallLanding";
import { BigLanding } from "./BigLanding";

export const LandingPage = () => {
  const { screenSize } = useApp();

  return screenSize === "big" ? (
    <BigLanding screenSize={screenSize} />
  ) : (
    <SmallLanding screenSize={screenSize} />
  );
};
