import { selector } from 'recoil';
import { UIState } from './UIState';

export const updateUIState = selector({
  key: 'updateUIState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const ui = get(UIState);
    return ui;
  },
  set: ({ set }, newValue) => {
    set(UIState, newValue)
  }
});
