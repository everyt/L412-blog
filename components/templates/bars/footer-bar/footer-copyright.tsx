import { motion } from 'framer-motion';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/getHueState';

import UpdateUIInterval from 'Hooks/UpdateUIInterval';

export default function Copyright() {
    const hue = useRecoilValue(getHueState);
  
    const UI = UpdateUIInterval();
  
    const isScreenBlack = UI.scrollTop > 200;

    const variants = {
      dark : {
        color: `hsla(${hue},60%,60%,.9)`
      },
      light : {
        color: `hsla(${hue},90%,80%,1)`
      },
    }

    return (
        <motion.div className='footerbar-copyright'
        variants={variants}
        animate={isScreenBlack ? `light` : `dark`}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}>
          <span>©2023 Everyt.</span>
          <span>All rights reserved.</span>
        </motion.div>
    )
}