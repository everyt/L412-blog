import { useEffect } from 'react';

export default function useResizeFocus(elementStr: string, observerStr: string) {
  let flag = false;
  useEffect(() => {
    const handleResizeEvent = () => {
      if (flag) {
        const scrollHeight = window.scrollY;
        const pageY = document.documentElement.clientHeight;
        const margin = scrollHeight % pageY;
        if (margin > 0) {
          const element = document.querySelector(elementStr) as HTMLElement;
          element.scrollIntoView();
        }
      }
    };

    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          flag = true;
        } else {
          flag = false;
          return;
        }
      },
      { threshold: [0] },
    );
    observer.observe(document.querySelector(observerStr)!);

    window.addEventListener('resize', handleResizeEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [elementStr, observerStr]);
}
