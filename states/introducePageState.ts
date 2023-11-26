import { atom } from 'recoil';

type PageType = {
  key: string;
  default: {
    count: number;
    flow: 'next' | 'prev';
  };
};

const pageObject: PageType = {
  key: 'introducePageState',
  default: {
    count: 0,
    flow: 'next',
  },
};

export const introducePageState = atom(pageObject);
