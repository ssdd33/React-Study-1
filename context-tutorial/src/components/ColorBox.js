import React, { useContext } from "react";
import colorContext from "../contexts/color";

const ColorBox = () => {
  const {
    state: { color, subcolor },
  } = useContext(colorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
