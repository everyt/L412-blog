'use client';

import Introduce from './index-introduce';
import Stacks from './index-stack-page/index-stacks';
import Projects from './index-project-page/index-projects';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import { AnimatePresence, motion } from 'framer-motion';

export default function Router() {
  const [page] = useRecoilState(introducePageState);

  const variants = {
    entry: (page: { count: number; flow: string }) => ({
      transform: page.count === 0 ? 'translateX(0)' : page.flow === 'prev' ? 'translateX(-100vw)' : 'translateX(100vw)',
    }),
    center: {
      transform: 'translateX(0)',
    },
    exit: (page: { flow: string }) => ({
      transform: page.flow === 'prev' ? 'translateX(100vw)' : 'translateX(-100vw)',
    }),
  };

  const pageList = [<Introduce />, <Stacks />, <Projects />];

  const Page = ({ count }: { count: number }) => (
    <motion.div
      key={count}
      custom={page}
      initial='entry'
      animate='center'
      exit='exit'
      variants={variants}
      transition={{ ease: 'easeInOut', duration: 2 }}>
      {pageList[count]}
    </motion.div>
  );

  return (
    <>
      <AnimatePresence custom={page}>
        {pageList.map((_, i) => page.count === i && <Page key={i} count={i} />)}
      </AnimatePresence>
    </>
  );
}
