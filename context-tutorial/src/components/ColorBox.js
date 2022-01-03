import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {
        /*function as child (Render Props) : 컴포넌트의 children 자리에 JSX 혹은 문자열이 아닌 함수를 전달하는 패턴*/
        ({ state: { color, subcolor } }) => (
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
        )
      }
    </ColorConsumer>
  );
};

export default ColorBox;
