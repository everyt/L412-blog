import 'Styles/templates/pages/main-page/main-page.scss';

import Nameplate from './main-nameplate';

import { lazy } from 'react';

const Background = lazy(() => import('./main-background'));

export default function MainPage() {
  return (
    <section className='main-container'>
      <Background />
      <Nameplate />
    </section>
  );
}
