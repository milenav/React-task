import React, { useState } from "react";

import AppContext from "../app/AppContext";

import Tab from "../components/Tab";
import Button from "../components/Button";

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
        <Button />
      </AppContext.Provider>
    </div>
  );
}

export default App;
