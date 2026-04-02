// src/components/charts/BalanceLineChart.js
import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AppContext } from "../../context/AppContext";

const BalanceLineChart = () => {
  const { transactions } = useContext(AppContext);

  // Prepare data: cumulative balance by date
  let balance = 0;
  const data = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => {
      balance += t.type === "income" ? t.amount : -t.amount;
      return { date: t.date, balance };
    });

  return (
    <div className="card">
      <h3>Balance Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceLineChart;
