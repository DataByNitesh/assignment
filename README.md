# 💰 Finance Dashboard

A clean and interactive finance dashboard built to demonstrate frontend development skills, focusing on UI design, state management, and user experience.

---

## 🚀 Overview

This project simulates a financial dashboard where users can track their income, expenses, and overall balance. It is designed with simplicity, clarity, and usability in mind rather than unnecessary complexity.

---

## ✨ Features

### 📊 Dashboard

* Total Balance, Income, and Expenses summary cards
* Monthly financial trend (line chart)
* Category-based spending breakdown (pie chart)

### 💳 Transactions

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Search transactions by category
* Filter by type (Income / Expense)
* Sorted by latest entries

### ➕ Transaction Management (Admin)

* Add new transactions using form inputs
* Delete transactions
* Input validation (amount, category, type)

### 🔐 Role-Based UI

* **Viewer** → Can only view data
* **Admin** → Can add and delete transactions

### 📈 Insights

* Highest spending category
* Total savings calculation
* Basic financial observations

### 💾 Persistence

* Data stored in **localStorage**
* Transactions remain after page refresh

---

## 🛠 Tech Stack

* **React (Vite)**
* **Zustand** (State Management)
* **Tailwind CSS**
* **Recharts**

---

## 🧠 Key Decisions

* Used **Zustand** for simple and efficient global state management
* Focused on **frontend-only implementation** using mock data
* Prioritized **clean UI and UX** over complex features
* Replaced prompt-based input with proper form UI for better usability
* Implemented **localStorage persistence** to simulate real application behavior

---

## ⚙️ How to Run

```bash
git clone https://github.com/DataByNitesh/assignment.git
cd assignment
npm install
npm run dev
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── cards/
 │    ├── charts/
 │    ├── transactions/
 │    └── ui/
 ├── pages/
 ├── store/
 ├── utils/
 ├── data/
```

---

## 🧪 What This Demonstrates

* Component-based architecture
* State management with Zustand
* Data transformation for charts and insights
* Role-based UI rendering
* Form handling and validation
* Clean and responsive UI design

---

## 📌 Notes

* This is a frontend-focused project (no backend integration)
* Data is stored locally in the browser
* Designed to be simple, functional, and user-friendly

---

## 👤 Author

**Nitesh Kadam**
