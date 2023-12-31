import 'Styles/templates/pages/main-page/main-page.scss';

import Nameplate from './main-page-nameplate';

import { lazy } from 'react';

import useResizeFocus from 'Hooks/useResizeFocus';

const Background = lazy(() => import('./main-page-background'));

export default function MainPage() {
  useResizeFocus('.main-container', '#observer-main');

  return (
    <section className='main-container'>
      <div id='observer-main' />
      <Background />
      <Nameplate />
    </section>
  );
}
