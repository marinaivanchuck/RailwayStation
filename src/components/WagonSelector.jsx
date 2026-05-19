import styles from './WagonSelector.module.css';

export default function WagonSelector({ wagons, selectedWagon, onSelect }) 
{
  return (
    <div className={styles.wagonList}>
      {wagons.map(wagon => (
        <button
          key={wagon.id}
          className={`${styles.wagonBtn} ${selectedWagon?.id === wagon.id 
? styles.active : ''}`}
          onClick={() => onSelect(wagon)}
        >
          {wagon.type} (місць: {wagon.seats})
        </button>
      ))}
    </div>
  );
}
