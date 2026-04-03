import { create } from "zustand";
import { transactions as initialData } from "../data/mockData";

export const useStore = create((set) => ({
  transactions: JSON.parse(localStorage.getItem("transactions")) || initialData,

  role: "viewer",
  filter: "all",

  addTransaction: (tx) =>
    set((state) => {
      const updated = [...state.transactions, tx];
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),

  deleteTransaction: (id) =>
    set((state) => {
      const updated = state.transactions.filter((t) => t.id !== id);
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),

  setRole: (role) => set({ role }),
  setFilter: (filter) => set({ filter }),
}));
