import { useState } from 'react';
import TrainCard from './TrainCard';
import styles from './TrainList.module.css';

export default function TrainList({ trains }) {
  const [search, setSearch] = useState('');

  const filteredTrains = trains.filter(train =>
    train.number.includes(search) ||
    train.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук за номером або маршрутом..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />
      <div className={styles.list}>
        {filteredTrains.length ? (
          filteredTrains.map(train => <TrainCard key={train.id} 
train={train} />)
        ) : (
          <p>Потягів не знайдено</p>
        )}
      </div>
    </div>
  );
}
