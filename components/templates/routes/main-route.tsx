import { MainPage } from '..';
import 'Styles/routes/main-route.scss';

export default function MainRoute() {
  return (
    <div className='main-route-container'>
      <MainPage />
      <div style={{ height: '2000px', backgroundColor: 'white' }}></div>
    </div>
  );
}
