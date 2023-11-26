import 'Styles/templates/bar/footer-bar/footer-bar.scss';

import Icons from './footer-icons';
import Copyright from './footer-copyright';

export default function FooterBar() {
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
        <Copyright />
      </section>
    </footer>
  );
}
