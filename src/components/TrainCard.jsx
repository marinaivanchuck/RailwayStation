import styles from './TrainCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function TrainCard({ train }) {
  const navigate = useNavigate();
  const departureDate = new Date(train.departure);
  const formattedDate = departureDate.toLocaleDateString('uk-UA');
  const formattedTime = departureDate.toLocaleTimeString('uk-UA', { hour: 
'2-digit', minute: '2-digit' });

  return (
    <div className={styles.card}>
      <h3>Потяг №{train.number}</h3>
      <p className={styles.route}>{train.route}</p>
      <p>Відправлення: {formattedDate} о {formattedTime}</p>
      <p>Тривалість: {train.duration}</p>
      <button onClick={() => 
navigate(`/booking/${train.id}`)}>Обрати</button>
    </div>
  );
}
