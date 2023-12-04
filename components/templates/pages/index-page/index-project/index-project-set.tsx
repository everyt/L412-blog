import ProjectWrapper from './index-project-wrapper';

export default function ProjectSet() {
  return (
    <>
      <ProjectWrapper
        index={1}
        fold='summary'
        title='1. Nextagram'
        tag={['Next.js', 'Typescript']}
        icon='skill-icons:instagram'
        iconSize={24}
        src='../../../../src/assets/Nextagram.webp'
        description='현대의 SNS는,<br />어떻게 동적으로 작동하고, 반응형으로 제작되는지<br />그 원리를 공부하기 위한 프로젝트'
      />
      <ProjectWrapper
        index={2}
        fold='summary'
        title='2. Green Way Kiosk'
        tag={['MVC', 'Servlet']}
        icon='fluent:kiosk-24-regular'
        iconSize={24}
        iconColor='#228B22'
        src='../../../../src/assets/Nextagram.webp'
        description='혼자서 진행하는 프로젝트의 한계를 넘어서<br />동료들과의 협업을 통해<br />다양한 경험과 지식을 습득하기 위한 프로젝트'
      />
      <ProjectWrapper
        index={3}
        fold='summary'
        title='3. Parking Lot Manager'
        tag={['JSP', 'JDBC']}
        icon='fluent:vehicle-car-parking-48-regular'
        iconSize={24}
        iconColor='#eeB200'
        src='../../../../src/assets/Nextagram.webp'
        description='학원에서 배운 것들로만 구현한<br />JSP 페이지를 넘나들며 모든 기능을 처리하는<br />구시대적인 동적 웹 프로젝트'
      />
      <ProjectWrapper
        index={4}
        fold='summary'
        title='4. 내일은 비가 오려나'
        tag={['MVC', 'Servlet']}
        icon='emojione:umbrella-with-rain-drops'
        iconSize={24}
        src='../../../../src/assets/Nextagram.webp'
        description='기존의 고용량, 비효율적인 일렉트론 대신<br />Rust를 기반으로 빌드된 Tauri로<br />Webview2 엔진에서 웹 비주얼노블 앱 구현 프로젝트'
      />
      <ProjectWrapper
        index={5}
        fold='summary'
        title='5. Princess Script'
        tag={['MVC', 'Servlet']}
        icon='mdi:script-outline'
        iconSize={24}
        iconColor='#F88379'
        src='../../../../src/assets/Nextagram.webp'
        description='앞선 4번 프로젝트에서 요구하는 데이터베이스 구조를<br />충족하기 위해서 만들기 시작한 스크립트 언어.<br />슈퍼셋의 형태가 어울린다고 생각해 리팩토링 계획중'
      />
      <ProjectWrapper
        index={6}
        fold='summary'
        title='6. NEXTEA'
        tag={['MVC', 'Servlet']}
        icon='fluent:kiosk-24-regular'
        iconSize={24}
        src='../../../../src/assets/Nextagram.webp'
        description='새로운 것을 배우고 싶어서 여러 쇼핑몰의 디자인을 참고해<br />'
      />
      <ProjectWrapper
        index={2}
        fold='summary'
        title='Green Way Kiosk'
        tag={['MVC', 'Servlet']}
        icon='fluent:kiosk-24-regular'
        iconSize={24}
        src='../../../../src/assets/Nextagram.webp'
        description='혼자서 진행하는 프로젝트의 한계를 넘어서<br />동료들과의 협업을 통해<br />다양한 경험과 지식을 습득하기 위한 프로젝트'
      />
    </>
  );
}
