import 'Styles/templates/footer-bar.scss';

import Icons from './footer-icons';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/getHueState';

export default function FooterBar() {
  const hue = useRecoilValue(getHueState);

  return (
    <footer className='footerbar-container-01'>
      <section className='footerbar-container-02'>
        <Icons
          iconArray={[
            {
              key: 1,
              icon: 'codicon:github',
              href: 'https://github.com/everyt',
            },
            {
              key: 2,
              icon: 'basil:google-solid',
              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=everytea.time@gmail.com',
            },
            {
              key: 3,
              icon: 'ic:twotone-discord',
              href: 'https://discord.gg/BZ4Vs7fXz6',
            },
          ]}
        />
        <div className='footerbar-copyright' style={{ color: `hsla(${hue - 5},50%,50%,1)` }}>
          <span>©2023 Everyt.</span>
          <span>All rights reserved.</span>
        </div>
      </section>
    </footer>
  );
}
