import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function CustomLineChart({ data }) {
  return (
    <div className="w-full h-64 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-gray-800">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
        >
          <CartesianGrid
            stroke="#374151" // darker grid lines
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937", // dark tooltip
              borderRadius: "10px",
              border: "1px solid #374151",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              color: "#f3f4f6",
            }}
            labelStyle={{ color: "#9ca3af", fontWeight: 500 }}
            formatter={(value) => `₹ ${value}`}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1" // indigo line
            strokeWidth={3}
            dot={{ r: 3, stroke: "#6366f1", strokeWidth: 2, fill: "#1f2937" }}
            activeDot={{
              r: 6,
              stroke: "#4f46e5",
              strokeWidth: 2,
              fill: "#1f2937",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
