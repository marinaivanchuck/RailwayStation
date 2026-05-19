import { trains } from '../data/trains';
import TrainList from '../components/TrainList';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Укрзалізниця — оберіть 
потяг</h1>
      <TrainList trains={trains} />
    </div>
  );
}
