import { useApp } from "../../AppContext";

import Card from "./Card";

const CardsContainer = () => {
  const { kittens } = useApp();

  return (
    <div style={{ display: "flex", marginTop: "2rem" }}>
      {kittens.map((kitty) => (
        <Card key={kitty.id} kitty={kitty} />
      ))}
    </div>
  );
};

export default CardsContainer;
