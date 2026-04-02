import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            date: "2026-04-01",
            amount: 5000,
            category: "Salary",
            type: "income",
          },
          {
            id: 2,
            date: "2026-04-02",
            amount: 200,
            category: "Food",
            type: "expense",
          },
          {
            id: 3,
            date: "2026-04-03",
            amount: 1000,
            category: "Shopping",
            type: "expense",
          },
        ];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const addTransaction = (transaction) => {
    const newTransaction = { id: Date.now(), ...transaction };
    setTransactions((prev) => [...prev, newTransaction]);
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
