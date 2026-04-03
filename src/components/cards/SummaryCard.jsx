function SummaryCard({ title, amount }) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition duration-200">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
        {title}
      </p>

      <h2
        className={`text-3xl font-semibold mt-2 ${
          amount >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        ₹ {amount}
      </h2>
    </div>
  );
}

export default SummaryCard;
