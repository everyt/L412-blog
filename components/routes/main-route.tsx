import 'Styles/routes/main-route.scss';

import { MainPage } from '../templates';

import { lazy, useEffect, useRef } from 'react';

const IndexPage = lazy(() => import('../templates/pages/index-page/index-page'));

export default function MainRoute() {
  const wheelDirection = useRef('down');

  useEffect(() => {
    const moveToPage = () => {
      const scrollHeight = window.scrollY;
      const pageY = document.documentElement.clientHeight;
      const margin = scrollHeight % pageY;
      if (scrollHeight !== 0 && margin !== 0) {
        const value = wheelDirection.current === 'down' ? pageY - margin : pageY - margin - pageY;
        window.scrollBy({
          top: value,
          behavior: 'smooth',
        });
      }
    };

    const handleWheelEvent = (event: WheelEvent) => {
      let wheel = event.deltaY;

      if (wheel > 0) {
        wheelDirection.current = 'down';
      } else {
        wheelDirection.current = 'up';
      }
    };

    window.addEventListener('scrollend', moveToPage);
    window.addEventListener('wheel', handleWheelEvent);

    return () => {
      window.removeEventListener('scrollend', moveToPage);
      window.removeEventListener('wheel', handleWheelEvent);
    };
  }, []);

  return (
    <div className='main-route-container'>
      <MainPage />
      <IndexPage />
    </div>
  );
}
