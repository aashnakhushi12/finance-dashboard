import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions } = useContext(AppContext);
  const [search, setSearch] = useState("");

  // Filter transactions based on search input
  const filteredTransactions = transactions.filter(
    (t) =>
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.amount.toString().includes(search) ||
      t.date.includes(search),
  );

  return (
    <div className="card">
      <h3>Transactions</h3>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search transactions by date, amount, or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />

      {/* Transactions Table */}
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
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                No transactions found
              </td>
            </tr>
          ) : (
            filteredTransactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
