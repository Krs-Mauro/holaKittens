import { YellowCat } from "./YellowCat";
import { HolaKittensTitle } from "../HolaKittensTitle";
import CardsContainer from "./CardsContainer";

export const BigMain = ({ screenSize }) => {
  return (
    <div
      className="displayContainer"
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardsContainer />
      <div style={{ display: "flex", position: "relative", bottom: "-40px" }}>
        <HolaKittensTitle />
        <YellowCat />
      </div>
    </div>
  );
};
