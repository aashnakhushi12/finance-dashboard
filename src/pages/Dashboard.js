import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import AddTransaction from "../components/AddTransaction";
import BalanceLineChart from "../components/charts/BalanceLineChart";
import SpendingPieChart from "../components/charts/SpendingPieChart";
import Insights from "../components/Insights";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);

  // Calculate income, expenses, balance
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expenses;

  return (
    <div className="container">
      <h1>Finance Dashboard</h1>

      {/* Role Switcher */}
      <RoleSwitcher />

      {/* Summary Cards */}
      <div className="flex">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expenses} />
      </div>

      {/* Admin Add Transaction Form */}
      <AddTransaction />

      {/* Charts */}
      <div className="flex">
        <BalanceLineChart />
        <SpendingPieChart />
      </div>

      {/* Insights Section */}
      <Insights />

      {/* Transactions Table */}
      <TransactionTable />
    </div>
  );
};

export default Dashboard;
