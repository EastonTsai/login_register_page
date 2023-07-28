import 'styles/ProjectItem.scss';
interface projectTagType {
  title: string,
  active: boolean,
  onClick: (title: string) => void,
}
export const ProjectTag = (props: projectTagType) => {
  const { title, active, onClick } = props
  return (
    <li
      className={`project_tag ${active && 'active'}`}
      onClick={() => onClick(title)}
    >
      {title}
    </li>
  )
}
interface projectCard {
  image: string,
  title: string,
  created: string
}
export const ProjectCard = (props: projectCard) => {
  const { image, title, created } = props
  return (
    <div className="project_card">
      <div className="card_created-time">
        {created}
      </div>
      <div className="card_image">
        <img src={image} alt={image} />
      </div>
      <div className="card_text">
        <p>{title}</p>
      </div>
      <div className="card_button">
        <div className="button-patch">修改</div>
        <div className="button-delete">刪除</div>
      </div>
    </div>
  )
}
export const ProjectListItem = (props: projectCard) => {
  const { image, title, created } = props
  return (
    <div className="project_list-item">
      <div className="item_image">
        <img src={image} alt={image} />
      </div>
      <div className="item_title">{title}</div>
      <div className="item_created">{created}</div>
      <div className="item_button">
        <div className="button-patch">修改</div>
        <div className="button-delete">刪除</div>
      </div>
    </div>
  )
}
