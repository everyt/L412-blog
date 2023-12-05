'use client';

import 'Styles/templates/pages/index-page/index-project/index-project-list.scss';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';
import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import getFadeInAnimation from 'Utils/getFadeInAnimation';
import ProjectSet from './index-project-set';

export default function ProjectList() {
  const [page, setPage] = useRecoilState(introducePageState);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleOnClick = (count: number, flow: 'next' | 'prev') => {
    setPage({
      ...page,
      count,
      flow,
    });
  };

  return (
    <section className='index-project-list-container' ref={ref}>
      <motion.div
        onClick={() => handleOnClick(1, 'prev')}
        className='index-project-list-text'
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.3 },
        }}
        style={{ marginLeft: '30px' }}>
        <span style={getFadeInAnimation(isInView, 3, -1000)}>←</span>
      </motion.div>
      <div className='index-project-list-wrapper'>
        <ProjectSet />
      </div>
      <motion.div
        onClick={() => handleOnClick(1, 'next')}
        className='index-project-list-text'
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.3 },
        }}
        style={{ marginRight: '40px' }}>
        <span style={getFadeInAnimation(isInView, 3, 1000)}>→</span>
      </motion.div>
    </section>
  );
}
