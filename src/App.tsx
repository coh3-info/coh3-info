import { useEffect } from 'react';

import router from './pages/router';
import { RouterProvider } from 'react-router-dom';
import mapSbps from './util/game_data/mapper/sbps';
import mapEbps from './util/game_data/mapper/ebps';
import { useDispatch } from 'react-redux';
import { setEbps, setSbps } from './state_store/slice/game_data';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([mapSbps(), mapEbps()]).then(([sbps, ebps]) => {
      dispatch(setSbps({ sbps }));
      dispatch(setEbps({ ebps }));
    });
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
