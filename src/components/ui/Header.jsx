import React from "react";
import { useStore } from "../../store/useStore";

const Header = () => {
  const { role, setRole } = useStore();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-100">Finance Dashboard</h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-gray-800 border border-gray-700 text-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Header;
