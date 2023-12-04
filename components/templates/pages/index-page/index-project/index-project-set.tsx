import ProjectWrapper from './index-project-wrapper';

export default function ProjectSet() {
  return (
    <>
      <ProjectWrapper
        index={1}
        fold='summary'
        title='Nextagram'
        icon='skill-icons:instagram'
        src='../../../../src/assets/Nextagram.webp'
        description='현대의 웹은,<br />어떻게 동적으로 작동하고, 어떻게 반응형으로 제작되는지<br />그 원리를 공부하기 위한 프로젝트'
      />
    </>
  );
}
