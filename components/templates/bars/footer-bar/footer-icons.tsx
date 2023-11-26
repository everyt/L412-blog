'use client';

import 'Styles/templates/bar/footer-bar/footer-icons.scss';

import { Icon } from '@iconify-icon/react';
import { motion } from 'framer-motion';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/hueState';

import useUpdateUIInterval from 'Hooks/useUpdateUIInterval';

type FooterBarProps = {
  iconArray: iconArrayType[];
};

type iconArrayType = {
  key: number;
  icon: string;
  href: string;
};

export default function Icons({ iconArray }: FooterBarProps) {
  const hue = useRecoilValue(getHueState);

  const UI = useUpdateUIInterval();

  const isScreenBlack = UI.scrollY > 200;

  const handleClickIcon = (event: React.MouseEvent, href: string) => {
    event.stopPropagation();
    window.open(href);
  };

  const variants = {
    dark1: {
      color: `hsla(${hue},40%,50%,.9)`,
    },
    light1: {
      color: `hsla(25, 100%, 97%,.8)`,
    },
    dark2: {
      color: `hsla(${hue + 10},40%,50%,.9)`,
    },
    light2: {
      color: `hsla(25, 100%, 97%,.8)`,
    },
    dark3: {
      color: `hsla(${hue + 20},40%,50%,.9)`,
    },
    light3: {
      color: `hsla(25, 100%, 97%,.8)`,
    },
  };

  return iconArray.map((_) => (
    <motion.div
      key={_.key}
      className='footerbar-icon'
      initial={`dark${_.key}`}
      variants={variants}
      animate={isScreenBlack ? `light${_.key}` : `dark${_.key}`}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={(event) => handleClickIcon(event, _.href)}>
      <Icon icon={_.icon} />
    </motion.div>
  ));
}
