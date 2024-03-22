import { createContext, useContext, useState } from "react";

// Erstellen Sie den Context
const OrderContext = createContext();

// Erstellen Sie den Provider für den Context
export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Funktion zum Verwenden des OrderContext in Komponenten
export const useOrder = () => {
  return useContext(OrderContext);
};