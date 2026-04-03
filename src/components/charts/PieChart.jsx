import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Softer, modern dark-friendly colors
const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#a78bfa"];

function CustomPieChart({ data }) {
  return (
    <div className="flex justify-center items-center bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-gray-800">
      <PieChart width={260} height={260}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50} // donut style
          outerRadius={85}
          paddingAngle={4}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#1f2937"
              strokeWidth={2}
            />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            borderRadius: "10px",
            border: "1px solid #374151",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            color: "#f3f4f6",
          }}
          labelStyle={{ color: "#9ca3af", fontWeight: 500 }}
          formatter={(value) => `₹ ${value}`}
        />
      </PieChart>
    </div>
  );
}

export default CustomPieChart;
