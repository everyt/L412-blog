import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import { AnimatePresence, motion } from 'framer-motion';

export default function Projects() {
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

  const Project = ({ count }: { count: number }) => (
    <motion.div
      key={count}
      custom={page}
      initial='entry'
      animate='center'
      exit='exit'
      variants={variants}
      transition={{ ease: 'easeInOut', duration: 2 }}>
      <IndexedProject index={count} />
    </motion.div>
  );

  return (
    <AnimatePresence custom={page}>
      {Array(4).map((_, i) => page.count === i && <Project key={i} count={i} />)}
    </AnimatePresence>
  );
}
