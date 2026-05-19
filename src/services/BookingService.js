const STORAGE_KEY = 'railway_bookings';

export const getBookingsForTrain = (trainId, wagonId) => {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const key = `${trainId}_${wagonId}`;
  return all[key] || [];
};

export const saveBooking = (trainId, wagonId, seats, userData) => {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const key = `${trainId}_${wagonId}`;
  const existing = all[key] || [];
  const newBookings = seats.map(seat => ({
    seat,
    user: userData,
    timestamp: Date.now()
  }));
  all[key] = [...existing, ...newBookings];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};
