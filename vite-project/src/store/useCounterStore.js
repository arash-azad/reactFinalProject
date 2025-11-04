import { create } from "zustand";

export const useCounterStore = create((set) => {
  const savedCounters = JSON.parse(localStorage.getItem("counters")) || {};

  const saveToLocalStorage = (counters) => {
    localStorage.setItem("counters", JSON.stringify(counters));
  };

  return {
    counters: savedCounters,

    increase: (id) =>
      set((state) => {
        const newCounters = {
          ...state.counters,
          [id]: (state.counters[id] || 0) + 1,
        };
        saveToLocalStorage(newCounters);
        return { counters: newCounters };
      }),

    decrease: (id) =>
      set((state) => {
        const newCounters = {
          ...state.counters,
          [id]: Math.max((state.counters[id] || 0) - 1, 0),
        };
        saveToLocalStorage(newCounters);
        return { counters: newCounters };
      }),

    reset: (id) =>
      set((state) => {
        const newCounters = { ...state.counters, [id]: 0 };
        saveToLocalStorage(newCounters);
        return { counters: newCounters };
      }),

    clearAll: () => {
      localStorage.removeItem("counters");
      set({ counters: {} });
    },
  };
});
