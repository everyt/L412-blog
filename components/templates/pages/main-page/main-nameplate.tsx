'use client';

import 

export default function Nameplate() {
  return (
    <article>
      <section className='main-nameplate-container'>
        <span className='main-nameplate-text'>
          안녕하세요. 제 이름은 <span className='main-nameplate-highlight'>곽태웅</span>입니다.
          <br />
          저는 풀 스택 웹 개발자입니다.
        </span>
        <span className='main-nameplate-button'>
          프론트엔드 개발자를 희망하고 있습니다. 하지만 새로운 지식이라면 백엔드, 웹 개발을 넘어서라도 배우기를
          좋아합니다. 이를 통해 다른 분야의 개발자와는 물론, 디자이너분들과도 원활한 소통이 가능합니다.
        </span>
      </section>
    </article>
  );
}
