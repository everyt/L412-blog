'use client';

import 'Styles/templates/pages/index-page/index-introduce.scss';

import { useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { motion } from 'framer-motion';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/hueState';

import getFadeInAnimation from 'Utils/getFadeInAnimation';

function Introduce() {
  const hue = useRecoilValue(getHueState);
  const [, setPage] = useRecoilState(introducePageState);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleOnClick = () => {
    setPage({
      count: 1,
      flow: 'next',
    });
  };

  return (
    <section className='index-introduce-container'>
      <div
        className='index-introduce-background1'
        style={{ background: `linear-gradient(black,  hsla(${hue},45%,65%,1))` }}
      />
      <img
        src='../../../../src/assets/Photo.png'
        className='index-introduce-img'
        ref={ref}
        style={getFadeInAnimation(isInView, 1.5, -200)}
      />
      <div className='index-introduce-img-overlay' style={getFadeInAnimation(isInView, 1.5, -200)} />
      <motion.div
        className='index-introdue-text'
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}>
        <span style={getFadeInAnimation(isInView, 1.5, 200)}>
          곽태웅.
          <br />
          <span style={{ fontSize: '2rem', color: `hsla(${hue},45%,65%,1)` }}>사람들을 배려하고 지식을 공유하는</span>
          <br />풀 스택 개발자입니다.
        </span>
      </motion.div>
      <motion.div
        className='index-introdue-text2'
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.3 },
        }}
        onClick={handleOnClick}>
        <span style={getFadeInAnimation(isInView, 1.5, 200)}>→</span>
      </motion.div>
    </section>
  );
}

export default memo(Introduce);
