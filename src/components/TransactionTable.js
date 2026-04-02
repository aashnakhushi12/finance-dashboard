import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="card">
      <h3>Transactions</h3>
      <table width="100%" border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
