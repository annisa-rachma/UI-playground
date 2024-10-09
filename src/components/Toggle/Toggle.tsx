import React from "react";
import styles from "./Toggle.module.css";

type toggleProps = {
  label: string;
  checked: boolean;
  handleToggle: (value: boolean) => void;
  size?: number;
  backdropColor?: string;
};

export default function Toggle({
  label,
  checked,
  handleToggle,
  size = 16,
  backdropColor = "white",
}: toggleProps) {
  const padding = size * 0.1;
  const width = size * 2 + padding * 2;

  const btnStyle = {
    width,
    padding,
    '--radius' : size * 0.25 + 'px',
    '--backdrop-color' : backdropColor
  };

  const ballStyle = {
    width : size,
    height : size,
    // "--color-bg" : 'white'
    transform: checked ? `translateX(100%)` : `translateX(0%)`,

  }

  const id = React.useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <button
        className={styles.toggle}
        type="button"
        id={id}
        aria-pressed={checked}
        style={btnStyle}
        onClick={() => handleToggle(!checked)}
      >
        <span className={styles.ball} style={ballStyle} />
      </button>
    </div>
  );
}
