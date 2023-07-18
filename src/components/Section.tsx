import 'styles/Section.scss';
import { ReactComponent as ArrowLeftIcon2 } from 'icons/arrow_2_left.svg'
import { ReactComponent as ArrowRightIcon2 } from 'icons/arrow_2_right.svg'
import SectionCard from './SectionCard';

interface sectionCardProps {
  picture: string,
  title: string,
  content: string,
  tags: string[],
  thumbs: number,
}

interface sectionProps {
  title: string,
  stores: sectionCardProps[]
}
const Section = (props: sectionProps) => {
  const { title, stores } = props

  const handleClickArrow = (e: boolean) => {

  }
  return (
    <div className="section container">
      <h2 className="section-title">{title}</h2>
      <ul className="section-list">
        {stores.map(item =>
          <SectionCard
            key={item.title}
            picture={item.picture}
            title={item.title}
            content={item.content}
            tags={item.tags}
            thumbs={item.thumbs}
          />)}
      </ul>
      {/* <div className="section-arrow">
        <div
          className="section-arrow_left"
          onClick={() => handleClickArrow(false)}
        ><ArrowLeftIcon2 /></div>
        <div
          className="section-arrow_right"
          onClick={() => handleClickArrow(true)}
        ><ArrowRightIcon2 /></div>
      </div> */}
    </div>
  )
}
export default Section