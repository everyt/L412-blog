import { useRef } from 'react';
import { useInView } from 'framer-motion';

import ProjectWrapper from './index-project-wrapper';

import getFadeInAnimation from 'Utils/getFadeInAnimation';

export default function ProjectSet() {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true }),
    isInView2 = useInView(ref2, { once: true }),
    isInView3 = useInView(ref3, { once: true });

  return (
    <>
      <div ref={ref1} />
      <ProjectWrapper
        index={1}
        style={getFadeInAnimation(isInView1, 2, -1000)}
        fold='summary'
        title='1. EVT`s Portfolio'
        tag={['Next.js', 'Typescript']}
        customIcon={true}
        icon='../../../../src/assets/EVT.png'
        iconSize={24}
        tagColor='#F3CFC6'
        src='../../../../src/assets/Nextagram.webp'
        description='처음으로 나만의 포트폴리오를<br />구현하기 위해 다양한 시도를 했던<br />도전적인 자그마한 프로젝트'
      />
      <ProjectWrapper
        index={2}
        style={getFadeInAnimation(isInView1, 2, -1000)}
        fold='summary'
        title='2. Nextagram'
        tag={['Next.js', 'Typescript']}
        icon='skill-icons:instagram'
        iconSize={24}
        tagColor='#D8BFD8'
        description='현대의 SNS는,<br />어떻게 동적으로 작동하고, 반응형으로 제작되는지<br />그 원리를 공부하기 위한 프로젝트'
      />
      <ProjectWrapper
        index={3}
        style={getFadeInAnimation(isInView1, 2, -1000)}
        fold='summary'
        title='3. Green Way Kiosk'
        tag={['MVC', 'Servlet']}
        icon='fluent:kiosk-24-regular'
        iconSize={24}
        iconColor='#228B22'
        tagTextColor='white'
        tagColor='#228B22'
        description='혼자서 진행하는 프로젝트의 한계를 넘어서<br />동료들과의 협업을 통해<br />다양한 경험과 지식을 습득하기 위한 프로젝트'
      />
      {ref1 && <div ref={ref2} />}
      <ProjectWrapper
        index={4}
        style={getFadeInAnimation(isInView2, 1.5, -1000)}
        fold='summary'
        title='4. Parking Lot Manager'
        tag={['JSP', 'JDBC']}
        icon='fluent:vehicle-car-parking-48-regular'
        iconSize={24}
        iconColor='#eeB200'
        tagColor='#eeB200'
        description='학원에서 배운 것들로만 구현한<br />JSP 페이지를 넘나들며 모든 기능을 처리하는<br />구시대적인 동적 웹 프로젝트'
      />
      <ProjectWrapper
        index={5}
        style={getFadeInAnimation(isInView2, 1.5, -1000)}
        fold='summary'
        title='5. 내일은 비가 오려나'
        tag={['MVC', 'Servlet']}
        icon='emojione:umbrella-with-rain-drops'
        iconSize={24}
        description='기존의 고용량, 비효율적인 일렉트론 대신<br />Rust를 기반으로 빌드된 Tauri로<br />Webview2 엔진에서 웹 비주얼노블 앱 구현 프로젝트'
      />
      <ProjectWrapper
        index={6}
        style={getFadeInAnimation(isInView2, 1.5, -1000)}
        fold='summary'
        title='6. Princess Script'
        tag={['MVC', 'Servlet']}
        customIcon={true}
        icon='../../../../src/assets/PS.png'
        iconSize={24}
        iconColor='#F88379'
        tagTextColor='white'
        tagColor='#F88379'
        description='앞선 5번 프로젝트에서 요구하는 데이터베이스 구조를<br />충족하기 위해서 만들기 시작한 스크립트 언어.<br />슈퍼셋의 형태가 어울린다고 생각해 리팩토링 계획중'
      />
      <ProjectWrapper
        index={7}
        style={getFadeInAnimation(isInView3, 3, -1000)}
        fold='summary'
        title='7. NEXTEA'
        tag={['Next.js', 'SpringBoot']}
        icon='tabler:shopping-bag-check'
        iconSize={24}
        iconColor='#40B5AD'
        tagTextColor='white'
        tagColor='#40B5AD'
        description='여러 쇼핑몰의 디자인을 참고해<br />로그인, 회원가입 등의 풀스택 통신을<br />구현한 프로젝트'
      />
      {ref2 && <div ref={ref3} />}
      <ProjectWrapper
        index={8}
        style={getFadeInAnimation(isInView3, 3, -1000)}
        fold='summary'
        title='8. React Web Clone'
        tag={['React']}
        icon='nonicons:react-16'
        iconSize={24}
        iconColor='#40E0D0'
        tagColor='#ADD8E6'
        description='기초를 다지고 난 뒤에<br />추상화된 기술에 눈 감고 헤딩하길 도전했던<br />코드를 따라하며 분석했던 프로젝트'
      />
      <ProjectWrapper
        index={9}
        style={getFadeInAnimation(isInView3, 3, -1000)}
        fold='summary'
        title='9. My First Tetris'
        tag={['ECMAScript6']}
        icon='fluent:tetris-app-28-filled'
        iconSize={24}
        iconColor='#FFA500'
        tagTextColor='#FFC000'
        tagColor='#4169E1'
        src='../../../../src/assets/Nextagram.webp'
        description='프로그래밍을 통한 성취감을 처음 느꼈던<br />배우고 성장한다는 경험을 하게 해 줬던<br />스스로 객체지향적으로 구현했다고 생각했던 프로젝트'
      />
    </>
  );
}
