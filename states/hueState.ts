import { atom } from 'recoil';

export const hueState = atom({
  key: 'hueState',
  default: Math.random() * 360,
});
