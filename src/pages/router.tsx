import { createBrowserRouter } from 'react-router-dom';
import SquadDetailsPage from './SquadDetailsPage';
import SquadListPage from './SquadListPage';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/compare/squad-list',
    element: <SquadListPage />,
  },
  {
    path: '/compare/comparator',
    element: <SquadDetailsPage />,
  },
]);

export default router;
