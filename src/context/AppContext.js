import { createContext, useState } from "react";
import { transactionsData } from "../data/transactions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{ transactions, role, setRole, addTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};
