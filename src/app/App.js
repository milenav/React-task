import React, { useState } from "react";

import AppContext from "./AppContext";

import Tab from "../components/Tab";
import Button from "../components/Button";
import View from "../components/View";

const appDefaults = {
  tabs: [],
  activeTabIndex: 0
};

function App() {
  const [state, setState] = useState(appDefaults);

  return (
    <div className="App">
      <AppContext.Provider value={{ state, setState }}>
        <Tab />
        <View />
        <Button />
      </AppContext.Provider>
    </div>
  );
}

export default App;
