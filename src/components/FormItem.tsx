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
}
export const InputItem = (props: inputItem) => {
  const { id, type, placeholder, value, onChange } = props
  return (
    <input className='form-item_input'
      id={id}
      type={type ? type : 'text'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
}
export const PasswordInput = (props: passwordViewType) => {
  const { className, label, password, placeholder, onChange, error } = props
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
