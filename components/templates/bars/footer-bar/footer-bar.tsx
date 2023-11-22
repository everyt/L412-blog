import 'Styles/templates/footer-bar.scss';

import Icons from './footer-icons';

export default function FooterBar() {
  return (
    <footer className='footerbar-container-01'>
      <section className='footerbar-container-02'>
        <figure className='footerbar-copyright'>
          <span>©2023 Everyt.</span>
          <span>All rights reserved.</span>
        </figure>
        <Icons
          iconArray={[
            {
              icon: 'codicon:github',
              href: 'https://github.com/everyt',
            },
            {
              icon: 'basil:google-solid',
              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=everytea.time@gmail.com',
            },
            {
              icon: 'ic:twotone-discord',
              href: 'https://discord.gg/BZ4Vs7fXz6',
            },
          ]}
        />
      </section>
    </footer>
  );
}
