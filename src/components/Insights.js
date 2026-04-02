import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  // Highest spending category
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "N/A";
  let max = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > max) {
      max = categoryMap[cat];
      highestCategory = cat;
    }
  }

  // Monthly summary
  const monthly = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  return (
    <div>
      <h3>Insights</h3>

      <p>
        <strong>Highest Spending Category:</strong> {highestCategory}
      </p>

      <p>
        <strong>Monthly Comparison:</strong>
      </p>

      {Object.keys(monthly).map((month) => (
        <p key={month}>
          {month}: Income ₹{monthly[month].income}, Expense ₹
          {monthly[month].expense}
        </p>
      ))}
    </div>
  );
}
