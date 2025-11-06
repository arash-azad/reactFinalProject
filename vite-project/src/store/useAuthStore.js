import { create } from "zustand";
import Cookies from "js-cookie";

const prevToken = Cookies.get("token");

console.log("prevToken:", prevToken);

const useAuthStore = create((set) => {
  return {
    token: prevToken,
    setToken: (newToken) => set((prev) => ({ token: newToken })),
  };
});

export default useAuthStore;
