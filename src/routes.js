import HomePage from './containers/HomePage';
import ProducersPage from './containers/ProducersPage';
import ProducerBioPage from './containers/ProducerBioPage';

const routes = [
  {
    path: '/',
    exact: true,
    translationId: 'home',
    component: HomePage,
  },
  {
    path: '/producers',
    exact: true,
    translationId: 'producers',
    component: ProducersPage,
  },
  {
    path: '/producers/:id',
    exact: true,
    component: ProducerBioPage,
  },
];

export default routes;
