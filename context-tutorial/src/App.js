import React from "react";
import ColorBox from "./components/ColorBox";
import colorContext from "./contexts/color";

function App() {
  return (
    <colorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </colorContext.Provider>
  );
}

export default App;
