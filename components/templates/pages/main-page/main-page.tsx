import 'Styles/pages/main-page.scss';

import Nameplate from './main-nameplate';

import { lazy } from 'react';

const Background = lazy(() => import('./main-background'));

export default function MainPage() {
  return (
    <main className='main-container'>
      <Background />
      <Nameplate />
    </main>
  );
}
