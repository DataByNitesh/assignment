import { useStore } from "../store/useStore";

function Insights() {
  const { transactions } = useStore();

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let topCategory = "N/A";
  let max = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > max) {
      max = categoryMap[cat];
      topCategory = cat;
    }
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const savings = income - expense;

  return (
    <div className="bg-gray-900/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-800 space-y-4 text-gray-200">
      <h2 className="text-lg font-semibold text-gray-100">Insights</h2>

      {/* Top Category */}
      <div className="bg-gray-800/70 rounded-xl p-3 border border-gray-700">
        <p className="text-sm text-gray-400">Highest Spending</p>
        <p className="mt-1 text-gray-100">
          <span className="font-semibold text-indigo-400">{topCategory}</span>{" "}
          <span className="text-red-400 font-medium">(₹ {max})</span>
        </p>
      </div>

      {/* Savings */}
      <div className="bg-gray-800/70 rounded-xl p-3 border border-gray-700">
        <p className="text-sm text-gray-400">Total Savings</p>
        <p
          className={`mt-1 text-lg font-semibold ${
            savings >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          ₹ {savings}
        </p>
      </div>

      {/* Message */}
      <div
        className={`rounded-xl p-3 text-sm border ${
          savings > 0
            ? "bg-green-500/10 text-green-400 border-green-500/20"
            : "bg-red-500/10 text-red-400 border-red-500/20"
        }`}
      >
        {savings > 0
          ? "You are saving money this month 👍"
          : "Your expenses exceed your income ⚠️"}
      </div>
    </div>
  );
}

export default Insights;
