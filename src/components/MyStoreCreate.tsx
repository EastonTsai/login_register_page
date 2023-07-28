import 'styles/MyStoreCreate.scss';
import { useState } from 'react';
import { InputItem, OptionItem } from './FormItem';
import { validateCreateOption } from 'methods/validateInput';

const MyStoreCreate = () => {
  const [title, setTitle] = useState('')
  const [introduce, setIntroduce] = useState('')
  const [option, setOption] = useState<string[]>([])
  const [createOption, setCreateOption] = useState('')
  const [classification, setClassification] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('送出')
  }
  const handleChangeOption = (oldContent: string, newContent: string) => {
    setOption(option.map(item => {
      if (item === oldContent) {
        return newContent
      }
      return item
    }))
  }
  const handleDeleteOption = (content: string) => {
    setOption(option.filter(item => {
      if (item !== content) {
        return item
      }
    }))
  }
  const handleCreateOption = () => {
    const newOption = validateCreateOption(createOption, option)
    if (newOption) {
      setOption([...option, ...newOption])
      setCreateOption('')
    }
  }
  return (
    <div className="my-store_create">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="title">商品名稱 : </label>
          <InputItem
            id='title'
            placeholder='請輸入商品名稱'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-item form-item_introduce">
          <label htmlFor="introduce">商品介紹 : </label>
          <textarea
            id='introduce'
            placeholder='請輸入商品介紹'
            value={introduce}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setIntroduce(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor='option-input'>商品選項 : </label>
          <div className="option-wrap">
            <div
              className="option_create"
            >
              <InputItem
                id='option-input'
                value={createOption}
                placeholder='使用 " ; "分隔可同時建立多個選項'
                onChange={(e) => setCreateOption(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreateOption()}
              />
              <span
                className='option_add-button'
                onClick={handleCreateOption}
              >+</span>
            </div>
            <ul className='option-list'>
              {option.length < 1 ? '尚未新增任可項目' :
                option.map(item =>
                  <OptionItem
                    key={item}
                    className='option-item'
                    content={item}
                    onChange={handleChangeOption}
                    onDelete={handleDeleteOption}
                  />)
              }
            </ul>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="classification">商品分類 : </label>
          <select name="classification" id="classification">
            <option value="未分類">未分類</option>
            {classification?.map(item =>
              <option value={item}>{item}</option>
            )}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="form-item_file">上傳圖片 : </label>
          <input id='form-item_file' type="file" multiple />
        </div>
        <button className="form_submit-button">
          確認上傳
        </button>
      </form>
    </div>
  )
}
export default MyStoreCreate