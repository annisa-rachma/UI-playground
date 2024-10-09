import React from "react";
import "./ToggleContainer.css";
import Toggle from "./Toggle";


export default function ToggleContainer() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  return (
    <div
      className="container"
      style={{
        "--color-bg": isDarkMode ? "black" : "white",
        "--color-text": isDarkMode ? "white" : "black",
      } as React.CSSProperties } 
    >
      <Toggle />
    </div>
  );
}
