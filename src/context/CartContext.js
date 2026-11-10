import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Pre-cargar 2 artículos para que la experiencia sea inmediata y visible
  const [cartItems, setCartItems] = useState([
    {
      id: "game-1",
      name: "Black Myth: Wukong (Steam Key)",
      price: 39.99,
      originalPrice: 59.99,
      type: "Juego Digital",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80",
      qty: 1,
    },
    {
      id: "hw-2",
      name: "AMD Ryzen 7 7800X3D",
      price: 389.99,
      originalPrice: 449.99,
      type: "Componente PC",
      image:
        "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80",
      qty: 1,
    },
  ]);

  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const addToCart = (product) => {
    const itemName = product.name || product.title;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: itemName,
          price: product.price,
          originalPrice: product.originalPrice || product.price,
          type: product.type || (product.freeGames ? "Bundle PC + Juegos" : product.platform ? "Juego Digital" : "Hardware PC"),
          image: product.image || product.pcImage,
          freeGames: product.freeGames || null,
          qty: 1,
        },
      ];
    });

    setNotification({
      open: true,
      message: `¡"${itemName}" agregado con éxito al carrito!`,
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const totalSavings = cartItems.reduce(
    (acc, item) =>
      acc + (item.originalPrice ? (item.originalPrice - item.price) * item.qty : 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        totalSavings,
        notification,
        closeNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe utilizarse dentro de un CartProvider");
  }
  return context;
}
