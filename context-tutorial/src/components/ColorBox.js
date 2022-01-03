import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {
        /*funtion as child (Render Props) : 컴포넌트의 children 자리에 JSX 혹은 문자열이 아닌 함수를 전달하는 패턴*/
        (value) => (
          <div
            style={{ width: "64px", height: "64px", background: value.color }}
          />
        )
      }
    </ColorContext.Consumer>
  );
};

export default ColorBox;
