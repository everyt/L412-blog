import { selector } from 'recoil';
import { hueState } from './hueState';

export const getHueState = selector({
  key: 'getHueState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const hue = get(hueState);

    return hue;
  },
});
