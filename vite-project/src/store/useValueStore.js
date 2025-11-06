import { create } from "zustand";

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("inputValue") || "";
  }
  return "";
};

export const useValueStore = create((set) => ({
  inputValue: getInitialValue(),
  setInputValue: (value) => {
    set({ inputValue: value });
    if (typeof window !== "undefined") {
      localStorage.setItem("inputValue", value);
    }
  },
}));
