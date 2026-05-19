import styles from './SeatMap.module.css';
import { useEffect, useState } from 'react';
import { getBookingsForTrain } from '../services/BookingService';

export default function SeatMap({ train, wagon, selectedSeats, 
onSelectSeats }) {
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    if (train && wagon) {
      const staticBooked = wagon.bookedSeats || [];
      const savedBooked = getBookingsForTrain(train.id, wagon.id).map(b => 
b.seat);
      setBookedSeats([...staticBooked, ...savedBooked]);
    }
  }, [train, wagon]);

  const totalSeats = wagon.seats;
  const seatsArray = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;
    if (selectedSeats.includes(seat)) {
      onSelectSeats(selectedSeats.filter(s => s !== seat));
    } else {
      onSelectSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className={styles.seatGrid}>
      {seatsArray.map(seat => {
        let status = 'free';
        if (bookedSeats.includes(seat)) status = 'booked';
        if (selectedSeats.includes(seat)) status = 'selected';
        return (
          <div
            key={seat}
            className={`${styles.seat} ${styles[status]}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
}

