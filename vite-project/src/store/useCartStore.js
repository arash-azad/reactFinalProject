import { create } from "zustand";

export const useCartStore = create((set) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const saveToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return {
    cart: savedCart,

    addToCart: (product) =>
      set((state) => {
        const exists = state.cart.find((p) => p.id === product.id);

        let newCart;
        if (exists) {
          newCart = state.cart.map((p) =>
            p.id === product.id
              ? { ...p, quantity: product.quantity }
              : p
          );
        } else {
          newCart = [...state.cart, { ...product }];
        }

        saveToLocalStorage(newCart);
        return { cart: newCart };
      }),

    removeFromCart: (id) =>
      set((state) => {
        const newCart = state.cart.filter((p) => p.id !== id);
        saveToLocalStorage(newCart);
        return { cart: newCart };
      }),

    clearCart: () => {
      localStorage.removeItem("cart");
      set({ cart: [] });
    },
  };
});
