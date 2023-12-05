import 'Styles/templates/pages/index-page/index-project/index-project-list.scss';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';

import { motion } from 'framer-motion';
import ProjectWrapper from './index-project-wrapper';
import ProjectList from './index-project-list';

//FIXME: 라우터 이동시에 기존 페이지 사라지고 새 페이지만 애니메이션 재생되는 문제

export default function ProjectRouter() {
  const [page] = useRecoilState(introducePageState);

  const list = [
    <ProjectList />,
    <ProjectWrapper
      index={1}
      fold='full'
      title='1. EVT`s Portfolio'
      tag={['Next.js', 'Typescript']}
      customIcon={true}
      icon='../../../../src/assets/EVT.png'
      iconSize={24}
      tagColor='#F3CFC6'
      src='../../../../src/assets/Nextagram.webp'
      description='처음으로 나만의 포트폴리오를<br />구현하기 위해 다양한 시도를 했던<br />도전적인 자그마한 프로젝트'
    />,
  ];

  const variants = {
    entry: (page: { flow: string }) => ({
      transform: page.flow === 'prev' ? 'translateX(-100vw)' : 'translateX(100vw)',
    }),
    center: {
      transform: 'translateX(0)',
    },
    exit: (page: { flow: string }) => ({
      transform: page.flow === 'prev' ? 'translateX(100vw)' : 'translateX(-100vw)',
    }),
  };

  const IndexedProject = ({ projects }: { projects: number }) => (
    <motion.div
      className='index-project-list-wrapper'
      custom={page}
      initial={'entry'}
      animate='center'
      exit='exit'
      variants={variants}
      transition={{ ease: 'easeInOut', duration: 2 }}>
      {list[projects]}
    </motion.div>
  );
  return (
    <section className='index-project-router-container'>
      {list.map((_, i) => page.projects === i && <IndexedProject key={page.projects} projects={page.projects} />)}
    </section>
  );
}
