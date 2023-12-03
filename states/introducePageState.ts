import { atom } from 'recoil';

type PageType = {
  key: string;
  default: {
    count: number;
    flow: 'next' | 'prev';
    projects: number;
    fold: 'summary' | 'full';
  };
};

const pageObject: PageType = {
  key: 'introducePageState',
  default: {
    count: 0,
    flow: 'next',
    projects: 0,
    fold: 'summary',
  },
};

export const introducePageState = atom(pageObject);
