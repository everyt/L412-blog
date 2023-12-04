import 'Styles/common/tag.scss';

type TagProps = {
  children: React.ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <div className='tag-container'>
      <div className='tag-blank' />
      <span className='tag-text'>{children}</span>
    </div>
  );
}
