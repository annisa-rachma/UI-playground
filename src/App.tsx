import { useState } from "react";
import "./App.css";
import HideNSeek from "./components/HideNSeek/HideNSeek";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HideNSeek />
    </>
  );
}

export default App;
