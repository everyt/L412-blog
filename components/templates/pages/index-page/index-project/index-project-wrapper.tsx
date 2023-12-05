import 'Styles/templates/pages/index-page/index-project/index-project-wrapper.scss';

import Tag from 'Components/common/tag';

import { useRecoilState } from 'recoil';
import { introducePageState } from 'States/introducePageState';
import { Icon } from '@iconify-icon/react';

type ProjectProps = {
  ref?: any;
  index: number;
  style?: any;
  fold: 'summary' | 'full';
  title: string;
  tag: string[];
  customIcon?: boolean;
  icon: string;
  iconColor?: string;
  iconSize?: number;
  tagTextColor?: string;
  tagColor?: string;
  src?: string;
  description: string;
};

export default function ProjectWrapper({
  ref,
  index,
  style,
  fold,
  title,
  tag,
  customIcon = false,
  icon,
  iconColor,
  iconSize,
  tagTextColor,
  tagColor,
  src,
  description,
}: ProjectProps) {
  const [page, setPage] = useRecoilState(introducePageState);

  return (
    <>
      {fold === 'summary' ? (
        <div
          style={style}
          ref={ref}
          className='index-project-wrapper-summary'
          onClick={() => setPage({ ...page, projects: index, flow: 'next' })}>
          <div className='index-project-rowbox'>
            <div className='index-project-rowbox'>
              {customIcon ? (
                <img
                  className='index-project-icon'
                  src={icon}
                  style={{ color: iconColor, height: iconSize, width: iconSize }}
                />
              ) : (
                <Icon className='index-project-icon' icon={icon} style={{ color: iconColor, fontSize: iconSize }} />
              )}
              <div className='index-project-title'>{title}</div>
            </div>
            <span className='index-project-tag'>
              {tag &&
                tag.map((tag, index) => (
                  <Tag key={index} tagTextColor={tagTextColor} tagColor={tagColor}>
                    {tag}
                  </Tag>
                ))}
            </span>
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
