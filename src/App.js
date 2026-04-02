import React, { useContext, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { AppContext } from "./context/AppContext";

function App() {
  const { darkMode } = useContext(AppContext);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return <Dashboard />;
}

export default App;
