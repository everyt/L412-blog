import { Icon } from '@iconify-icon/react';

type IconProps = {
  icon: string;
  color?: string;
  size: number;
};

export default function StackWrapper({ icon, color = 'black', size }: IconProps) {
  return (
    <div className='index-stack-wrapper'>
      <Icon icon={icon} style={{ color, fontSize: `${size}px` }} />
      <span></span>
    </div>
  );
}
