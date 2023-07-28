import 'styles/MyStoreProject.scss';
import { ReactComponent as ListIcon } from 'icons/list.svg'
import { ReactComponent as CardListIcon } from 'icons/image_list.svg'
import { ProjectCard, ProjectListItem, ProjectTag } from './ProjectItem';
import { useState } from 'react';

//------------
const dummyProjectList = [
  {
    image: 'https://picsum.photos/600/400?random=1',
    id: '1',
    title: '水洗背心',
    created: '2022-03-03'
  },
  {
    image: 'https://picsum.photos/600/400?random=2',
    id: '2',
    title: '水洗背心',
    created: '2022-02-03'
  },
  {
    image: 'https://picsum.photos/600/400?random=3',
    id: '3',
    title: '水洗背心',
    created: '2022-05-03'
  },
  {
    image: 'https://picsum.photos/600/400?random=4',
    id: '4',
    title: '水洗背心',
    created: '2022-02-23'
  },
  {
    image: 'https://picsum.photos/600/400?random=5',
    id: '5',
    title: '水洗背心',
    created: '2022-02-06'
  },
  {
    image: 'https://picsum.photos/600/400?random=6',
    id: '6',
    title: '水洗背心',
    created: '2022-02-13'
  },
  {
    image: 'https://picsum.photos/600/400?random=7',
    id: '7',
    title: '水洗背心',
    created: '2022-03-23'
  },
  {
    image: 'https://picsum.photos/600/400?random=8',
    id: '8',
    title: '水洗背心',
    created: '2022-01-03'
  },
  {
    image: 'https://picsum.photos/600/400?random=9',
    id: '9',
    title: '水洗背心',
    created: '2022-4-07'
  },
  {
    image: 'https://picsum.photos/600/400?random=10',
    id: '10',
    title: '水洗背心',
    created: '2022-02-03'
  },
  {
    image: 'https://picsum.photos/600/400?random=11',
    id: '11',
    title: '水洗背心',
    created: '2022-02-03'
  },
  {
    image: 'https://picsum.photos/600/400?random=12',
    id: '12',
    title: '水洗背心',
    created: '2022-02-03'
  },
]
//------------

const MyStoreProject = () => {
  const [viewModel, setViewModel] = useState(false)
  const [classifications, setClassifications] = useState<string[]>(['所有商品', '上衣', '短褲'])
  const [projectList, setProjectList] = useState(dummyProjectList)
  const [currentTag, setCurrentTag] = useState('所有商品')
  return (
    <div className="my-store_project">
      <div className="project_nav">
        <ul className="project_tag-list">
          {classifications?.map(item =>
            <ProjectTag
              key={item}
              title={item}
              active={currentTag === item ? true : false}
              onClick={(title) => setCurrentTag(title)}
            />
          )}
        </ul>
        <span
          className="project_view-control"
          onClick={() => setViewModel(!viewModel)}
        >
          {!viewModel ? <CardListIcon /> : <ListIcon />}
        </span>
      </div>
      {viewModel &&
        <div className="project_cards-wrap">
          {projectList?.map(item =>
            <ProjectCard
              key={item.id}
              image={item.image}
              title={item.title}
              created={item.created}
            />
          )}
        </div>}
      {!viewModel &&
        <div className="project_list-wrap">
          {projectList?.map(item =>
            <ProjectListItem
              key={item.id}
              image={item.image}
              title={item.title}
              created={item.created}
            />)}
        </div>}
    </div>
  )
}
export default MyStoreProject