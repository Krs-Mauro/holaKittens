import { useApp } from "../../AppContext";
import { BigMain } from "./BigMain";
import { SmallMain } from "./SmallMain";

export const MainApp = () => {
  const { screenSize } = useApp();

  return screenSize === "small" ? (
    <SmallMain screenSize={screenSize} />
  ) : (
    <BigMain screenSize={screenSize} />
  );
};
