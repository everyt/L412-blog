import 'Styles/templates/pages/index-page/index-project/index-project-wrapper.scss';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';
import { Icon } from '@iconify-icon/react';

type ProjectProps = {
  index: number;
  fold: 'summary' | 'full';
  title: string;
  icon: string;
  iconColor?: string;
  iconSize?: number;
  src?: string;
  description: string;
};

export default function ProjectWrapper({
  index,
  fold,
  title,
  icon,
  iconColor,
  iconSize,
  src,
  description,
}: ProjectProps) {
  const [page, setPage] = useRecoilState(introducePageState);

  return (
    <>
      {fold === 'summary' ? (
        <div
          className='index-project-wrapper-summary'
          onClick={() => setPage({ ...page, projects: index, flow: 'next' })}>
          <div className='index-project-rowbox'>
            <Icon className='index-project-icon' icon={icon} style={{ color: iconColor, fontSize: iconSize }} />
            <h1>{title}</h1>
          </div>
          <div className='index-project-line' />
          <span className='index-project-description' dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
      ) : (
        <article className='index-project-container'>
          <div className='index-project-wrapper-full' onClick={() => setPage({ ...page, projects: 0, flow: 'prev' })}>
            <h1>{title}</h1>
            <img src={src} width={640} />
            <span className='index-project-description' dangerouslySetInnerHTML={{ __html: description }}></span>
          </div>
        </article>
      )}
    </>
  );
}
