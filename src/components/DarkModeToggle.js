import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />{" "}
        Dark Mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
