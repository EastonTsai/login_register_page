import 'styles/ClassificationList.scss';

const ClassificationList = () => {
  return (
    <div className="classification-list">
      <ul className="classification-list_container container">
        <li className="classification-list_item">人氣店家</li>
        <li className="classification-list_item">五金商行</li>
        <li className="classification-list_item">銅板美食</li>
        <li className="classification-list_item">服飾</li>
        <li className="classification-list_item">手作小物</li>
        <li className="classification-list_item">大型家電</li>
      </ul>
    </div>
  )
}
export default ClassificationList