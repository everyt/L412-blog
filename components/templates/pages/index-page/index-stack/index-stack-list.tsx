'use client';

import 'Styles/templates/pages/index-page/index-stack/index-stack-list.scss';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import getFadeInAnimation from 'Utils/getFadeInAnimation';
import StackWrapper from './index-stack-wrapper';

export default function StackList() {
  const [page, setPage] = useRecoilState(introducePageState);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleOnClick = (count: number, flow: 'next' | 'prev') => {
    setPage({
      ...page,
      count,
      flow,
    });
  };

  return (
    <section className='index-stack-list-container' ref={ref}>
      <motion.div
        onClick={() => handleOnClick(0, 'prev')}
        className='index-stack-list-text'
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.3 },
        }}
        style={{ marginLeft: '30px' }}>
        <span style={getFadeInAnimation(isInView, 3, -1000)}>←</span>
      </motion.div>
      <div className='index-stack-list-colbox'>
        <span className='index-stack-list-text'>개발 스택</span>
        <div className='index-stack-list-container2'>
          <StackWrapper icon='devicon:html5-wordmark' fontSize={72} style={getFadeInAnimation(isInView, 2, -200)}>
            html으로만 이루어진 정적 웹 페이지를 작성할 수 있습니다.
          </StackWrapper>
          <StackWrapper icon='devicon:css3-wordmark' fontSize={72} style={getFadeInAnimation(isInView, 2, -200)}>
            기본적인 CSS뿐만 아니라, SCSS를 비롯한 슈퍼셋, styled component를 비롯한 인라인 스타일을 작성할 수 있습니다.
          </StackWrapper>
          <StackWrapper
            icon='devicon:javascript'
            fontSize={60}
            style={{ top: '26px', left: '26px', ...getFadeInAnimation(isInView, 2, 400) }}>
            ES6 문법을 비롯해서, 클래스, DOM 조작 등을 수행하며, typescript같은 슈퍼셋 또한 협업이 가능할 정도로 구사할
            수 있습니다.
          </StackWrapper>
          <StackWrapper
            icon='devicon:react-wordmark'
            fontSize={66}
            style={{ top: '23px', left: '23px', ...getFadeInAnimation(isInView, 2, 400) }}>
            CRA에 의존하지 않고, 상황에 가장 어울리는 번들러를 기반으로 최적화된 반응형 SPA를 구현할 수 있습니다.
          </StackWrapper>
          <StackWrapper icon='devicon:java-wordmark' fontSize={72} style={getFadeInAnimation(isInView, 2, -200)}>
            객체지향적으로 클래스의 캡슐화를 구현하고 다양한 디자인 패턴 기법을 구현할 수 있습니다.
          </StackWrapper>
          <StackWrapper icon='devicon:spring-wordmark' fontSize={72} style={getFadeInAnimation(isInView, 2, -200)}>
            서블릿을 통한 MVC 패턴부터, JPA를 사용해 추상화한 MVC 패턴까지 모두 구현할 수 있습니다.
          </StackWrapper>
          <StackWrapper
            icon='devicon:jquery-wordmark'
            fontSize={66}
            style={{ top: '23px', left: '23px', ...getFadeInAnimation(isInView, 2, 400) }}>
            jquery로 대표되는 moment나 lodash같은 라이브러리를 능숙하게 사용할 수 있습니다.
          </StackWrapper>
          <StackWrapper icon='devicon:mysql-wordmark' fontSize={72} style={getFadeInAnimation(isInView, 2, 400)}>
            관계형과 비 관계형, redis와 같은 특수 목적의 데이터베이스까지 모두 능숙하게 다룰 수 있습니다.
          </StackWrapper>
        </div>
      </div>
      <motion.div
        onClick={() => handleOnClick(2, 'next')}
        className='index-stack-list-text'
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.3 },
        }}
        style={{ marginRight: '40px' }}>
        <span style={getFadeInAnimation(isInView, 3, 1000)}>→</span>
      </motion.div>
    </section>
  );
}
