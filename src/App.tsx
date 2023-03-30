import { useEffect } from 'react';

import router from './pages/router';
import { RouterProvider } from 'react-router-dom';
import mapSbps from './util/game_data/mapper/sbps';
import mapEbps from './util/game_data/mapper/ebps';
import { useDispatch } from 'react-redux';
import { setEbps, setSbps, setWeapons } from './state_store/slice/game_data';
import mapWeapons from './util/game_data/mapper/weapon';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([mapSbps(), mapEbps(), mapWeapons()]).then(([sbps, ebps, weapons]) => {
      dispatch(setSbps({ sbps }));
      dispatch(setEbps({ ebps }));
      dispatch(setWeapons({ weapons }));
    });
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
