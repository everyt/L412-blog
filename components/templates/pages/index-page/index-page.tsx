import 'Styles/pages/index-page.scss';
import Introduce from './index-introduce';

export default function IndexPage() {
  return (
    <section className='index-container'>
      <article className='index-article'>
        <Introduce />
      </article>
    </section>
  );
}
