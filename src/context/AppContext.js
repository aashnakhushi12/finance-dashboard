import React, { createContext, useState, useEffect } from "react";
import { transactionsData } from "../data/transactions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");

  // Use data file instead of hardcoded array
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Save transactions
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Save dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Add transaction
  const addTransaction = (tx) => {
    setTransactions((prev) => [...prev, { ...tx, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        transactions,
        addTransaction,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
