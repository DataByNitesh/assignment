import React from "react";
import Header from "../components/ui/Header";
import SummaryCard from "../components/cards/SummaryCard";
import TransactionList from "../components/transactions/TransactionList";
import Insights from "../components/Insights";
import CustomLineChart from "../components/charts/LineChart";
import CustomPieChart from "../components/charts/PieChart";
import { useStore } from "../store/useStore";
import { getMonthlyData, getCategoryData } from "../utils/chartData";

const Dashboard = () => {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  const monthlyData = getMonthlyData(transactions);
  const categoryData = getCategoryData(transactions);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-200">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expense" amount={expense} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 p-4">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">
            Monthly Overview
          </h3>
          <CustomLineChart data={monthlyData} />
        </div>
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 p-4">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">
            Category Breakdown
          </h3>
          <CustomPieChart data={categoryData} />
        </div>
      </div>

      <div className="bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-800 p-4 my-6">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">
          Transactions
        </h3>
        <TransactionList />
      </div>

      <div className="bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-800 p-4 my-6">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Insights</h3>
        <Insights />
      </div>
    </div>
  );
};

export default Dashboard;
