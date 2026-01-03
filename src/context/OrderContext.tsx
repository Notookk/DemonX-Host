import { createContext, useContext, useState, ReactNode } from 'react';

interface OrderContextType {
  selectedOS: string;
  setSelectedOS: (os: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOS, setSelectedOS] = useState('Ubuntu 22.04');
  const [selectedLocation, setSelectedLocation] = useState('Europe');

  return (
    <OrderContext.Provider value={{ selectedOS, setSelectedOS, selectedLocation, setSelectedLocation }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
