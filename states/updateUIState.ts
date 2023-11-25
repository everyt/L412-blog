import { selector } from 'recoil';
import { UIState } from './UIState';

export const updateUIState = selector({
  key: 'updateUIState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const ui = get(UIState);
    return ui;
  },
  set: ({ set }, newValue) => {
    set(
      UIState,
      [newValue].map((v) => {
        const obj = v as { x: number; y: number; scrollY: number; currentPage: number };
        return {
          x: obj.x,
          y: obj.y,
          scrollY: obj.scrollY,
        };
      })[0],
    );
  },
});
