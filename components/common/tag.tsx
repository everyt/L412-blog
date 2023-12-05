import 'Styles/common/tag.scss';

type TagProps = {
  tagTextColor?: string;
  tagColor?: string;
  children: React.ReactNode;
};

export default function Tag({ tagTextColor, tagColor, children }: TagProps) {
  return (
    <div style={{ color: tagTextColor, backgroundColor: tagColor }} className='tag-container'>
      <div className='tag-blank' />
      <span className='tag-text'>{children}</span>
    </div>
  );
}
