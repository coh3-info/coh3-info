import { createBrowserRouter } from 'react-router-dom';
import SquadDetailsPage from './SquadDetailsPage';
import SquadListPage from './SquadListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SquadListPage />,
  },
  {
    path: '/details',
    element: <SquadDetailsPage />,
  },
]);

export default router;
