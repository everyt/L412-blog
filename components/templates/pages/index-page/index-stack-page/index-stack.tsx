import 'Styles/templates/pages/index-page/index-stack-wrapper.scss';

import { Icon } from '@iconify-icon/react';

import { useRecoilValue } from 'recoil';
import { UIState } from 'States/UIState';

type StackProps = {
  icon: string;
  color?: string;
  fontSize: number;
  style?: {};
  children: React.ReactNode;
};

export default function Stack({ icon, color = 'black', fontSize, style, children }: StackProps) {
  const ui = useRecoilValue(UIState);
  return (
    <div className='index-stack-wrapper'>
      <div className='index-stack-border' />
      <Icon className='index-stack-icon' icon={icon} style={{ ...style, color, fontSize }} />
      {ui.width > 1150 && ui.height > 550 ? (
        <span className='index-stack-text'>{children}</span>
      ) : (
        <span className='index-stack-text2'> </span>
      )}
    </div>
  );
}
