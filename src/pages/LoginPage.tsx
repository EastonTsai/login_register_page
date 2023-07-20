import 'styles/LoginPage.scss';
import Header from "components/Header"
import { InputItem, PasswordInput } from "components/FormItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import { validateLogin } from "methods/validateInput"

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validateResult = validateLogin(account, password, checkPassword)
    if (validateResult) {
      setErrorMessage(validateResult)
      return console.log('驗證失敗')
    }
    console.log('驗證通過')
    //! 前端驗證完成 , 開始發出請求
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
      <Header />
      <div className="login">
        <div className="login_container container">
          <form onSubmit={handleSubmit}>
            <h1>登入</h1>
            <div className={`form-item ${errorMessage?.accountError && 'error'}`}>
              <label htmlFor="account">帳號 : </label>
              <InputItem
                id='account'
                placeholder="必須包含英文大小寫及數字"
                value={account}
                onChange={(e) => handleChangeValue(e.target.value, 'account')}
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
            <div className="form-error">

            </div>
            <button className='form-button'>確認登入</button>
            <div className="login-register-button">
              <Link to='/register'>
                <span>還沒註冊?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default LoginPage