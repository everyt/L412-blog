import 'Styles/templates/pages/index-page/index-project.scss';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';
import { Icon } from '@iconify-icon/react';

type ProjectProps = {
  index: number;
  fold: 'summary' | 'full';
  title: string;
  icon: string;
  iconColor: string;
  iconSize: number;
  src: string;
  description: string;
};

export default function Project({ index, fold, title, icon, iconColor, iconSize, src, description }: ProjectProps) {
  const [page, setPage] = useRecoilState(introducePageState);

  return (
    <>
      {fold === 'summary' ? (
        <div
          className='index-project-wrapper-summary'
          onClick={() => setPage({ ...page, fold: 'full', projects: index, flow: 'next' })}>
          <Icon className='index-stack-icon' icon={icon} style={{ color: iconColor, fontSize: iconSize }} />
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      ) : (
        <article className='index-project-container'>
          <div
            className='index-project-wrapper-full'
            onClick={() => setPage({ ...page, fold: 'summary', projects: 0, flow: 'prev' })}>
            <h1>{title}</h1>
            <img src={src} width={640} />
            <span>{description}</span>
          </div>
        </article>
      )}
    </>
  );
}
