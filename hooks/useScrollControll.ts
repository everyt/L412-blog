import { useEffect } from 'react';

type Key = {
  [index: string]: number;
};

const useDisableScroll = () => {
  const keys: Key = { 'ArrowLeft': 1, 'ArrowUp': 1, 'ArrowRight': 1, 'ArrowDown': 1 };

  const preventDefault = (e: Event) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
    if (keys[e.key]) {
      preventDefault(e);
      return false;
    }
  };

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    });
    window.addEventListener('test', opts as any, opts);
    window.removeEventListener('test', opts as any, opts);
  } catch (e) {}

  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  };

  const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, false);
    window.removeEventListener('touchmove', preventDefault, false);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  };

  useEffect(() => {
    disableScroll();
    return enableScroll;
  }, []);

  return { enableScroll, disableScroll };
};

export default useDisableScroll;
