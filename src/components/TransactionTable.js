import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionTable() {
  const { transactions } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="card">
      <h3>Transactions</h3>

      <input
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="4">No transactions found</td>
            </tr>
          ) : (
            filtered.map((t) => (
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
}
