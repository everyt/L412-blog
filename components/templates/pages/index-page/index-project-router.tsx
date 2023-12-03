import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import { AnimatePresence, motion } from 'framer-motion';

import { UnfoldedProject } from './index-project';

export default function ProjectRouter() {
  const [page] = useRecoilState(introducePageState);

  const variants = {
    entry: (page: { projects: number; flow: string }) => ({
      transform:
        page.projects === 0 ? 'translateX(0)' : page.flow === 'prev' ? 'translateX(-100vw)' : 'translateX(100vw)',
    }),
    center: {
      transform: 'translateX(0)',
    },
    exit: (page: { flow: string }) => ({
      transform: page.flow === 'prev' ? 'translateX(100vw)' : 'translateX(-100vw)',
    }),
  };

  const projectList = [
    <UnfoldedProject title='Clone of Instagram' src='' description='' />,
    <UnfoldedProject title='Clone of Instagram' src='' description='' />,
    <UnfoldedProject title='Clone of Instagram' src='' description='' />,
  ];

  return (
    <>
      <AnimatePresence custom={page}>
        <motion.div
          key={page.count}
          custom={page}
          initial='entry'
          animate='center'
          exit='exit'
          variants={variants}
          transition={{ ease: 'easeInOut', duration: 2 }}>
          {projectList[page.projects]}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
