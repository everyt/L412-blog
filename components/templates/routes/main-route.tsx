import 'Styles/routes/main-route.scss';

import { MainPage } from '..';

import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/index-page/index-page'));

export default function MainRoute() {
  return (
    <div className='main-route-container'>
      <MainPage />
      <IndexPage />
    </div>
  );
}
