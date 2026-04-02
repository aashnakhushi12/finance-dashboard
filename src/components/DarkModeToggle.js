import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
