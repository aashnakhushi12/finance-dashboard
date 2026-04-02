import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AddTransaction = () => {
  const { role, addTransaction } = useContext(AppContext);
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  if (role !== "admin") return null; // Viewer cannot see

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.amount || !form.category)
      return alert("Fill all fields");
    addTransaction({ ...form, amount: Number(form.amount) });
    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  return (
    <div className="card">
      <h3>Add Transaction</h3>
      <form
        onSubmit={handleSubmit}
        className="flex"
        style={{ flexDirection: "column", gap: "10px" }}
      >
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
