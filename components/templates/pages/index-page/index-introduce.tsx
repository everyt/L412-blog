'use client';

import 'Styles/pages/index-introduce.scss';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Introduce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };
  const animation2 = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };
  const animation3 = {
    transform: isInView ? 'none' : 'translateX(200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };

  return (
    <section className='index-introduce-container'>
      <div className='index-introduce-background1' style={animation} />
      <img src='../../../../src/assets/Photo.png' className='index-introduce-img' ref={ref} style={animation2} />
      <div className='index-introduce-img-overlay' style={animation2} />
      <span className='index-introdue-text' style={animation3}>
        I'm a full stack
        <br />
        developer & designer
      </span>
      <span className='index-introdue-text2' style={animation3}>
        →
      </span>
    </section>
  );
}
