'use client';

import 'Styles/templates/pages/index-page/index-stack/index-stack-list.scss';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import getFadeInAnimation from 'Utils/getFadeInAnimation';
import StackSet from './index-stack-set';

export default function StackList() {
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
    <section className='index-stack-list-container' ref={ref}>
      <motion.div
        onClick={() => handleOnClick(0, 'prev')}
        className='index-stack-list-text'
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
      <div className='index-stack-list-colbox'>
        <span className='index-stack-list-text'>개발 스택</span>
        <div className='index-stack-list-wrapper'>
          <StackSet inView={isInView} />
        </div>
      </div>
      <motion.div
        onClick={() => handleOnClick(2, 'next')}
        className='index-stack-list-text'
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
