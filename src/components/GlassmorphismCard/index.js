import React, { memo } from "react";
import "./styles.css";
function GlassmorphismCard(params) {
  return (
    <div className="comp-glass-main">
      <div className="comp-glass-card">
        <span style={{ "--i": "0" }}></span>
        <span style={{ "--i": "1" }}></span>
        <span style={{ "--i": "2" }}></span>
        <span style={{ "--i": "3" }}></span>
        <div className="comp-glass-glass">
          <div className="comp-glass-glass-center">
            <div className="comp-glass-glass-div1">GANGS OF POLARIS</div>
            <div className="comp-glass-glass-div2">Resource Showdown</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(GlassmorphismCard);
