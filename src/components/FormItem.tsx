import { ReactComponent as EyeOpenIcon } from 'icons/eye alt.svg'
import { ReactComponent as EyeCloseIcon } from 'icons/eye close.svg'
import 'styles/FormItem.scss';
import { useState } from 'react';

interface inputItem {
  id: string,
  type?: string,
  placeholder: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  maxlength?: number,
}
export const InputItem = (props: inputItem) => {
  const { id, type, placeholder, value, onChange, onKeyDown, maxlength } = props
  return (
    <input className='form-item_input'
      id={id}
      type={type ? type : 'text'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength={maxlength}
    />
  )
}
interface passwordViewType {
  className: string,
  label: string,
  password: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  maxlength?: number,
}
export const PasswordInput = (props: passwordViewType) => {
  const { className, label, password, placeholder, onChange, error, maxlength } = props
  const [passwordView, setPasswordView] = useState(false)
  return (
    <div className={`${className} form-item_password-wrap`}>
      <label htmlFor="password">{label} </label>
      <InputItem
        id='password'
        type={!passwordView ? 'password' : 'text'}
        placeholder={placeholder}
        value={password}
        onChange={onChange}
        maxlength={maxlength}
      />
      <div className="form-item_error">{error}</div>
      <span
        className="form-item_view-button"
        onClick={() => setPasswordView(!passwordView)}
      >{!passwordView ?
        <EyeCloseIcon /> : <EyeOpenIcon />}</span>
    </div>
  )
}
interface OptionType {
  className: string,
  content: string,
  onChange: (oldContent: string, newContent: string) => void,
  onDelete: (content: string) => void
}
export const OptionItem = (props: OptionType) => {
  const { className, content, onChange, onDelete } = props
  const [text, setText] = useState(content)
  const [inputModel, setInputModel] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setInputModel(!inputModel)
      onChange(content, text)
    }
  }
  const handleDelete = () => {
    onDelete(content)
  }
  return (
    <li
      className={`form-item_option-item ${className}`}
      onDoubleClick={() => setInputModel(!inputModel)}
    >
      <span onClick={handleDelete}>X</span>
      {!inputModel ?
        <p>{text}</p>
        :
        <input
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />}
    </li>
  )
}

