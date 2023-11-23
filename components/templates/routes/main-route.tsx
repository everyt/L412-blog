import { IndexPage, MainPage } from '..';
import 'Styles/routes/main-route.scss';

export default function MainRoute() {
  return (
    <div className='main-route-container'>
      <MainPage />
      <IndexPage />
    </div>
  );
}
