import { YellowCat } from "./YellowCat";
import { HolaKittensTitle } from "../HolaKittensTitle";
import CardsContainer from "./CardsContainer";

export const SmallMain = ({ screenSize }) => {
  return (
    <div
      className="displayContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HolaKittensTitle />
      <CardsContainer />
      <YellowCat />
    </div>
  );
};
