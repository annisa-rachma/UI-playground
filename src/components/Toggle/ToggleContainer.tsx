import React from "react";
import styles from "./ToggleContainer.module.css";
import Toggle from "./Toggle";


export default function ToggleContainer() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  return (
    <div
      className={styles.container} 
      style={{
        "--color-bg": isDarkMode ? "black" : "white",
        "--color-text": isDarkMode ? "white" : "black",
      } as React.CSSProperties } 
    >
      <Toggle label={isDarkMode ? 'Dark Mode' : 'Light Mode'}  checked={isDarkMode} handleToggle={setIsDarkMode} />
    </div>
  );
}
