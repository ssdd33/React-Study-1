import React, { Component } from "react";
import colorContext from "../contexts/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
/* static contextType을 정의하면 class 메서드에서도 context에 넣어 둔 함수를 호출할 수 있다. 
단, 하나의 class에서 하나의 context만 사용할 수 있다.*/
export default class SelectColor extends Component {
  static contextType = colorContext;
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetsubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetsubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
