import { useStore } from "../../store/useStore";
import { useState } from "react";

function TransactionList() {
  const {
    transactions,
    filter,
    setFilter,
    role,
    deleteTransaction,
    addTransaction,
  } = useStore();

  // 🔥 Form state
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  // 🔥 Unique categories
  const categories = [...new Set(transactions.map((t) => t.category))];

  // 🔥 Filter + search + sort
  const filteredData = [...transactions]
    .filter((t) => (filter === "all" ? true : t.type === filter))
    .filter((t) => t.category?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6 text-gray-200">
      {/* Controls */}
      <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-800 flex flex-col gap-3">
        {/* Search */}
        <input
          type="text"
          placeholder="Search category..."
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* 🔥 Add Transaction Form */}
        {role === "admin" && (
          <div className="flex flex-col gap-3 mt-2 border-t border-gray-800 pt-3">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <button
              onClick={() => {
                if (!amount || !category || !type) {
                  alert("All fields are required");
                  return;
                }

                const numAmount = Number(amount);

                if (isNaN(numAmount) || numAmount <= 0) {
                  alert("Invalid amount");
                  return;
                }

                addTransaction({
                  id: Date.now(),
                  amount: numAmount,
                  category,
                  type,
                  date: new Date().toISOString().slice(0, 10),
                });

                // reset form
                setAmount("");
                setCategory("");
                setType("expense");
              }}
              className="w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition shadow-md"
            >
              Add Transaction
            </button>
          </div>
        )}
      </div>

      {/* List */}
      <div className="bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl p-4 border border-gray-800 space-y-3">
        {filteredData.length === 0 ? (
          <p className="text-gray-400 text-center py-4">
            No transactions found
          </p>
        ) : (
          filteredData.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-gray-800/80 rounded-xl p-4 border border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
            >
              {/* Left */}
              <div>
                <p className="font-semibold text-gray-100">{t.category}</p>
                <p className="text-xs text-gray-400 mt-1">{t.date}</p>

                <span
                  className={`text-xs px-2 py-1 rounded-md mt-2 inline-block ${
                    t.type === "income"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {t.type}
                </span>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <p
                  className={`text-lg font-semibold ${
                    t.type === "income" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ₹ {t.amount}
                </p>

                {role === "admin" && (
                  <button
                    onClick={() => deleteTransaction(t.id)}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-red-500/90 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TransactionList;
