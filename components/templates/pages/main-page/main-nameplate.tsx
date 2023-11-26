import 'Styles/templates/pages/main-page/main-nameplate.scss';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/hueState';

export default function Nameplate() {
  const hue = useRecoilValue(getHueState);

  const handleClickButton = () => {
    const height = window.innerHeight;
    window.scrollBy({
      behavior: 'smooth',
      top: height,
    });
  };

  return (
    <article className='main-nameplate-container'>
      <span style={{ color: `hsla(${hue},95%,80%,1)` }} className='main-nameplate-text-small'>
        안녕하세요!
      </span>
      <span style={{ color: `hsla(${hue > 180 ? hue - 30 : hue + 30},95%,80%,1)` }} className='main-nameplate-text-big'>
        <span style={{ color: 'white' }}>곽태웅</span>입니다.
      </span>
      <div className='main-nameplate-button' onClick={handleClickButton}>
        소개할게요
      </div>
    </article>
  );
}
