import React, { createContext, useState } from "react";

const colorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: { setColor: () => {}, setSubcolor: () => {} },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <colorContext.Provider value={value}>{children}</colorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = colorContext;

export { ColorProvider, ColorConsumer };
export default colorContext;
