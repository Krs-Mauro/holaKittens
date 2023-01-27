import { useState } from "react";

import { LandingPage } from "./Components/LandingPage/LandingPage";
import { useApp } from "./AppContext";
import { MainApp } from "./Components/MainPage/MainApp";

const App = () => {
  const { isInMain } = useApp();

  return (
    <section className="App">
      {isInMain ? <MainApp /> : <LandingPage />}
    </section>
  );
};

export default App;
