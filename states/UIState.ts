import { atom, selector } from 'recoil';

export const UIState = atom({
  key: 'UIState',
  default: {
    x: window.innerWidth,
    y: window.innerHeight,
    scrollY: window.scrollY,
  },
});

export const updateUIState = selector({
  key: 'updateUIState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const ui = get(UIState);
    return ui;
  },
});
