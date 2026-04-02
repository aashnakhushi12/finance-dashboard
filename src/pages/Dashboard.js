import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import AddTransaction from "../components/AddTransaction";
import BalanceLineChart from "../components/charts/BalanceLineChart";
import SpendingPieChart from "../components/charts/SpendingPieChart";
import Insights from "../components/Insights";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Dashboard() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="container">
      <h1>💰 Finance Dashboard</h1>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <RoleSwitcher />
        <DarkModeToggle />
      </div>

      {/* Summary */}
      <div className="flex">
        <SummaryCard title="Balance" value={income - expense} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      {/* Admin */}
      <AddTransaction />

      {/* Charts */}
      <div className="flex">
        <div className="card">
          <BalanceLineChart />
        </div>
        <div className="card">
          <SpendingPieChart />
        </div>
      </div>

      {/* Insights */}
      <div className="card">
        <Insights />
      </div>

      {/* Table */}
      <TransactionTable />
    </div>
  );
}
