import 'styles/LoginPage.scss';
import { InputItem, PasswordInput } from "components/FormItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import { validateLogin } from "methods/validateInput"
import FeatureList from 'components/FeatureList';

interface errorMessageType {
  accountError?: string | undefined,
  passwordError?: string | undefined,
  checkPasswordError?: string | undefined,
}

const LoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<errorMessageType>()

  const clearValue = () => {
    setAccount('')
    setPassword('')
    setCheckPassword('')
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validateResult = validateLogin(account, password, checkPassword)
    if (validateResult) {
      return setErrorMessage(validateResult) //驗證失敗
    }
    alert('完成前端驗證, 開始向 server 送出請求')

    //! 前端驗證完成 , 開始發出請求
    clearValue()
  }
  const handleChangeValue = (value: string, input: 'account' | 'password' | 'checkPassword') => {
    if (input === 'account') {
      setAccount(value)
      if (errorMessage?.accountError) {
        delete errorMessage.accountError
        setErrorMessage(errorMessage)
      }
    }
    if (input === 'password') {
      setPassword(value)
      if (errorMessage?.passwordError) {
        delete errorMessage.passwordError
        setErrorMessage(errorMessage)
      }
    }
    if (input === 'checkPassword') {
      setCheckPassword(value)
      if (errorMessage?.checkPasswordError) {
        delete errorMessage.checkPasswordError
        setErrorMessage(errorMessage)
      }
    }
  }
  return (
    <div className="login-page">
      <main className="login-page_main">
        <div className="login_container container">
          <form onSubmit={handleSubmit}>
            <h1>登入</h1>
            <div className={`form-item ${errorMessage?.accountError && 'error'}`}>
              <label htmlFor="account">帳號 : </label>
              <InputItem
                id='account'
                placeholder="請輸入帳號"
                value={account}
                onChange={(e) => handleChangeValue(e.target.value, 'account')}
                maxlength={12}
              />
              <div className="form-item_error">{errorMessage?.accountError}</div>
            </div>
            <PasswordInput
              className={`form-item ${errorMessage?.passwordError && 'error'}`}
              label='密碼 :'
              password={password}
              placeholder='請輸入密碼'
              onChange={(e) => handleChangeValue(e.target.value, 'password')}
              error={errorMessage?.passwordError}
              maxlength={12}
            />
            <PasswordInput
              className={`form-item ${errorMessage?.checkPasswordError && 'error'}`}
              label='確認密碼 :'
              password={checkPassword}
              placeholder='請再次輸入密碼'
              onChange={(e) => {
                handleChangeValue(e.target.value, 'checkPassword')
              }
              }
              error={errorMessage?.checkPasswordError}
            />
            <button className='form-button'>確認登入</button>
            <div className="login-register-button">
              <Link to='/register'>
                <span>還沒註冊?</span>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <FeatureList />
    </div>
  )
}


export default LoginPage