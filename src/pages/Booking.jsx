import { useParams, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { trains } from '../data/trains';
import { useEffect, useState } from 'react';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const { setSelectedTrain, setSelectedWagon, selectedWagon, 
selectedSeats, setSelectedSeats } = useBooking();
  const [currentTrain, setCurrentTrain] = useState(null);

  useEffect(() => {
    const train = trains.find(t => t.id === parseInt(trainId));
    if (!train) {
      navigate('/');
      return;
    }
    setCurrentTrain(train);
    setSelectedTrain(train);
    if (train.wagons.length) setSelectedWagon(train.wagons[0]);
  }, [trainId, setSelectedTrain, setSelectedWagon, navigate]);

  if (!currentTrain) return <div>Завантаження...</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Бронювання: Потяг №{currentTrain.number}</h2>
      <p>{currentTrain.route}</p>
      <WagonSelector
        wagons={currentTrain.wagons}
        selectedWagon={selectedWagon}
        onSelect={setSelectedWagon}
      />
      {selectedWagon && (
        <>
          <SeatMap
            train={currentTrain}
            wagon={selectedWagon}
            selectedSeats={selectedSeats}
            onSelectSeats={setSelectedSeats}
          />
          <BookingForm
            train={currentTrain}
            wagon={selectedWagon}
            selectedSeats={selectedSeats}
            onSuccess={() => {
              setSelectedSeats([]);
              setTimeout(() => navigate('/'), 2000);
            }}
          />
        </>
      )}
      <button onClick={() => navigate('/')} style={{ marginTop: '1rem' 
}}>← До списку</button>
    </div>
  );
}
