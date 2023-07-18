import 'styles/SectionCard.scss';

import { ReactComponent as ThumbsIcon } from 'icons/thumbs up.svg'
interface sectionCardProps {
  picture: string,
  title: string,
  content: string,
  tags: string[],
  thumbs: number,
}
const SectionCard = (props: sectionCardProps) => {
  const { picture, title, content, tags, thumbs } = props
  return (
    <li className='section-list_item'>
      <div className='section-list_item-wrap'>
        <div className="section-list_item-pic">
          <img src={picture}
            alt={title}
          />
        </div>
        <div className="section-list_item-txt">
          <p className="section-list_item-txt_title">[ <span>{title}</span> ]</p>
          <p className="section-list_item-txt_content">{content}</p>
          <div className="section-list_item-txt_tag">
            {tags.map(item =>
              <span key={item}>{item}</span>)}
          </div>
          <div className="section-list_item-comment">
            <div>
              <span><ThumbsIcon /></span>
              <span>{thumbs}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
export default SectionCard