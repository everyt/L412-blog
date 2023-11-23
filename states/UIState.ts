import { atom } from 'recoil';

export const UIState = atom({
  key: 'UIState',
  default: {
    x: window.innerWidth,
    y: window.innerHeight,
    scrollTop: document.body.scrollTop,
  }
});
