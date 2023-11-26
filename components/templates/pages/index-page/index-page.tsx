import 'Styles/templates/pages/index-page/index-page.scss';

import Router from './index-router';

export default function IndexPage() {
  return (
    <section className='index-container'>
      <article className='index-article'>
        <Router />
      </article>
    </section>
  );
}
