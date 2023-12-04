'use client';

import Introduce from './index-page-introduce';
import StackList from './index-stack/index-stack-list';
import ProjectList from './index-project/index-project-list';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Router() {
  const [page] = useRecoilState(introducePageState);
  const init = useRef(true);

  const routerVariants = {
    entry: (page: { count: number; flow: string }) => ({
      transform:
        init.current && page.count === 0
          ? 'translateX(0)'
          : page.flow === 'prev'
          ? 'translateX(-100vw)'
          : 'translateX(100vw)',
    }),
    center: {
      transform: 'translateX(0)',
    },
    exit: (page: { flow: string }) => ({
      transform: page.flow === 'prev' ? 'translateX(100vw)' : 'translateX(-100vw)',
    }),
  };

  const handleExitComplete = () => {
    if (init.current) {
      init.current = false;
    }
  };

  const pageList = [<Introduce />, <StackList />, <ProjectList />];

  const Page = ({ count }: { count: number }) => (
    <motion.div
      key={count}
      custom={page}
      initial={'entry'}
      animate='center'
      exit='exit'
      variants={routerVariants}
      transition={{ ease: 'easeInOut', duration: 2 }}>
      {pageList[count]}
    </motion.div>
  );

  return (
    <main>
      <AnimatePresence custom={page} onExitComplete={handleExitComplete}>
        {pageList.map((_, i) => page.count === i && <Page key={i} count={i} />)}
      </AnimatePresence>
    </main>
  );
}
