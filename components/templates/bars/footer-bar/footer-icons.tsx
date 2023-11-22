'use client';

import 'Styles/templates/footer-icons.scss';

import { Icon } from '@iconify-icon/react';
import { motion } from 'framer-motion';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/getHueState';

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

  const handleClickIcon = (event: React.MouseEvent, href: string) => {
    event.stopPropagation();
    window.open(href);
  };

  return iconArray.map((_) => (
    <motion.div
      key={_.key}
      className='footerbar-icon'
      style={{ color: `hsla(${hue + _.key * 10},${40}%,${50}%,1)` }}
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
