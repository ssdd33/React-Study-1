import React, { Component } from "react";
import colorContext from "../contexts/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
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
