import React, { memo } from "react";
import "./styles.css";
function AnimatedButton() {
  return (
    <div className="comp-button-main">
      <a href="#" style={{ "--clr": "#7dfdfe" }}>
        <span>Click to enter the arena</span>
        <i></i>
      </a>
    </div>
  );
}

export default memo(AnimatedButton);
