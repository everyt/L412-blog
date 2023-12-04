import ProjectWrapper from './index-project-wrapper';

export default function ProjectSet() {
  return (
    <>
      <ProjectWrapper
        index={1}
        fold='summary'
        title='Nextagram'
        tag={['Next.js', 'Typescript']}
        icon='skill-icons:instagram'
        iconSize={24}
        src='../../../../src/assets/Nextagram.webp'
        description='현대의 SNS는,<br />어떻게 동적으로 작동하고, 반응형으로 제작되는지<br />그 원리를 공부하기 위한 프로젝트'
      />
      <ProjectWrapper
        index={2}
        fold='summary'
        title='Nextagram'
        tag={['Next.js', 'Typescript']}
        icon='skill-icons:instagram'
        iconSize={24}
        src='../../../../src/assets/Nextagram.webp'
        description='현대의 SNS는,<br />어떻게 동적으로 작동하고, 반응형으로 제작되는지<br />그 원리를 공부하기 위한 프로젝트'
      />
    </>
  );
}
