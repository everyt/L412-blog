'use client';

import 'Styles/templates/pages/index-page/index-introduce2.scss';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

import { Icon } from '@iconify-icon/react';

import getFadeInAnimation from 'Utils/getFadeInAnimation';

export default function Stacks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className='index-stacks-container'>
      <Icon icon='devicon:html5-wordmark' style={{ fontSize: '72px' }} />
      <Icon icon='devicon:css3-wordmark' style={{ fontSize: '72px' }} />
      <Icon icon='devicon:react-wordmark' style={{ fontSize: '72px' }} />
      <Icon icon='logos:recoil-icon' style={{ fontSize: '72px' }} />
      <Icon icon='devicon:nextjs' style={{ fontSize: '72px' }} />
      <Icon icon='devicon:jquery-wordmark' style={{ fontSize: '72px' }} />
      <Icon icon='devicon:vitejs' style={{ fontSize: '72px' }} />
      <Icon icon='logos:css-3' style={{ fontSize: '72px' }} />
      <motion.div
        className='index-stacks-text'
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.3 },
        }}>
        <span style={getFadeInAnimation(isInView, 1.5, 200)}>→</span>
      </motion.div>
    </section>
  );
}
