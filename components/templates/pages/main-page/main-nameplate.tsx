import 'Styles/pages/main-nameplate.scss';

import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/getHueState';

export default function Nameplate() {
  const hue = useRecoilValue(getHueState);

  const handleClickButton = () => {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: window.innerHeight,
    });
  };

  return (
    <article className='main-nameplate-container'>
      <span style={{ color: `hsla(${hue},95%,80%,1)` }} className='main-nameplate-text-small'>
        안녕하세요!
      </span>
      <span style={{ color: `hsla(${hue + 30},95%,80%,1)` }} className='main-nameplate-text-big'>
        개발자 <span style={{ color: 'white' }}>곽태웅</span>입니다.
      </span>
      <div className='main-nameplate-button' onClick={handleClickButton}>
        자세히 알아보기
      </div>
    </article>
  );
}
