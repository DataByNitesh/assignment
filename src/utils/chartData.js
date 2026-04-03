// src/utils/chartData.js

export const getMonthlyData = (transactions) => {
  const monthly = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthly[month]) {
      monthly[month] = 0;
    }

    monthly[month] += t.type === "income" ? t.amount : -t.amount;
  });

  return Object.entries(monthly).map(([month, value]) => ({
    month,
    value,
  }));
};

export const getCategoryData = (transactions) => {
  const categories = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  return Object.entries(categories).map(([name, value]) => ({
    name,
    value,
  }));
};
