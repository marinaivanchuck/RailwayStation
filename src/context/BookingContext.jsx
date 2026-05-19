import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const clearBooking = () => {
    setSelectedTrain(null);
    setSelectedWagon(null);
    setSelectedSeats([]);
  };

  return (
    <BookingContext.Provider value={{
      selectedTrain, setSelectedTrain,
      selectedWagon, setSelectedWagon,
      selectedSeats, setSelectedSeats,
      clearBooking
    }}>
      {children}
    </BookingContext.Provider>
  );
};
