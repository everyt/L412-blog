import { atom, selector } from 'recoil';

export const hueState = atom({
  key: 'hueState',
  default: Math.random() * 360,
});

export const getHueState = selector({
  key: 'getHueState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const hue = get(hueState);

    return hue;
  },
});
