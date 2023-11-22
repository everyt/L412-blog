'use client';

import 'Styles/templates/footer-bar.scss';

import { Icon } from '@iconify-icon/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type FooterBarProps = {
  iconArray: iconArrayType[];
};
type iconArrayType = {
  icon: string;
  href: string;
};

export default function Icons({ iconArray }: FooterBarProps) {
  const navigate = useNavigate();

  const handleClickIcon = (event: React.MouseEvent, href: string) => {
    event.stopPropagation();
    navigate(href);
  };

  return iconArray.map((_) => (
    <motion.figure
      className='footerbar-icon'
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={(event) => handleClickIcon(event, _.href)}>
      <Icon icon={_.icon} />
    </motion.figure>
  ));
}
