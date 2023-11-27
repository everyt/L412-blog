import 'Styles/templates/pages/index-page/index-stack-wrapper.scss';

import { Icon } from '@iconify-icon/react';

type IconProps = {
  icon: string;
  color?: string;
  fontSize: number;
  style?: {};
  children: React.ReactNode;
};

export default function StackWrapper({ icon, color = 'black', fontSize, style, children }: IconProps) {
  return (
    <div className='index-stack-wrapper'>
      <div className='index-stack-border' />
      <Icon className='index-stack-icon' icon={icon} style={{ ...style, color, fontSize }} />
      <span className='index-stack-text'>{children}</span>
    </div>
  );
}
