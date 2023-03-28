import { useEffect } from 'react';

import router from './pages/router';
import { RouterProvider } from 'react-router-dom';
import mapSbps from './util/game_data/mapper/sbps';
import { useDispatch } from 'react-redux';
import { setSbps } from './state_store/slice/game_data';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    mapSbps().then((sbps) => {
      dispatch(setSbps({ sbps }));
    });
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
