import 'Styles/templates/pages/index-page/index-page.scss';

import Router from './index-router';

import useResizeFocus from 'Hooks/useResizeFocus';

export default function IndexPage() {
  useResizeFocus('.index-container', '#observer-index');

  return (
    <section className='index-container'>
      <div id='observer-index' />
      <article className='index-article'>
        <Router />
      </article>
    </section>
  );
}
