// src/components/Insights.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  // Highest spending category
  const categoryTotals = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      if (categoryTotals[t.category]) categoryTotals[t.category] += t.amount;
      else categoryTotals[t.category] = t.amount;
    });
  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    "None",
  );

  // Monthly comparison
  const monthTotals = {};
  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM
    if (!monthTotals[month]) monthTotals[month] = { income: 0, expense: 0 };
    if (t.type === "income") monthTotals[month].income += t.amount;
    else monthTotals[month].expense += t.amount;
  });

  return (
    <div className="card">
      <h3>Insights</h3>
      <p>
        <strong>Highest Spending Category:</strong> {highestCategory}
      </p>
      <p>
        <strong>Monthly Comparison:</strong>
      </p>
      <ul>
        {Object.keys(monthTotals).map((month) => (
          <li key={month}>
            {month}: Income ₹{monthTotals[month].income}, Expense ₹
            {monthTotals[month].expense}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
