import router from './pages/router';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEbps, setSbps, setWeapons } from './state_store/slice/game_data';
import mapSbps from './util/game_data/mapper/sbps';
import mapEbps from './util/game_data/mapper/ebps';
import mapWeapons from './util/game_data/mapper/weapon';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([mapSbps(), mapEbps(), mapWeapons()]).then(([sbps, ebps, weapons]) => {
      dispatch(setSbps({ sbps }));
      dispatch(setEbps({ ebps }));
      dispatch(setWeapons({ weapons }));
    });
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
