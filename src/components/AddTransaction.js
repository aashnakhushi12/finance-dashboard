import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction() {
  const { role, addTransaction } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  if (role !== "admin") return null;

  const submit = (e) => {
    e.preventDefault();
    addTransaction({ ...form, amount: Number(form.amount) });
    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Add Transaction</h3>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button>Add</button>
    </form>
  );
}
