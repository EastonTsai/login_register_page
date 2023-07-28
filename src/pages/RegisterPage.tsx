

import Header from "components/Header"
import { InputItem, PasswordInput } from "components/FormItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import { validateRegister } from "methods/validateInput"

interface errorMessageType {
  accountError?: string,
  emailError?: string,
  passwordError?: string,
  checkPasswordError?: string,
}

const RegisterPage = () => {
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<errorMessageType>()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validateResult = validateRegister(account, email, password, checkPassword)
    if (validateResult) {
      setErrorMessage(validateResult)
      // console.log('前端驗證失敗')
      return
    }
    // console.log('驗證通過')
    //! 前端驗證完成 , 開始發出請求

  }
  const handleChangeValue = (value: string, input: string) => {
    if (input === 'account') {
      setAccount(value)
      if (errorMessage?.accountError) {
        delete errorMessage.accountError
        setErrorMessage(errorMessage)
      }
    }
    else if (input === 'email') {
      setEmail(value)
      if (errorMessage?.emailError) {
        delete errorMessage.emailError
        setErrorMessage(errorMessage)
      }
    }
    else if (input === 'password') {
      setPassword(value)
      if (errorMessage?.passwordError) {
        delete errorMessage.passwordError
        setErrorMessage(errorMessage)
      }
    }
    else if (input === 'checkPassword') {
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
      <div className="login-page_main">
        <div className="login_container container">
          <form onSubmit={handleSubmit}>
            <h1>註冊</h1>
            <div className={`form-item ${errorMessage?.accountError && 'error'}`}>
              <label htmlFor="account">帳號 : </label>
              <InputItem
                id='account'
                placeholder="最多12個字元 (包含英文大小寫)"
                value={account}
                onChange={(e) => handleChangeValue(e.target.value, 'account')}
                maxlength={12}
              />
              <div className="form-item_error">{errorMessage?.accountError}</div>
            </div>
            <div className={`form-item ${errorMessage?.emailError && 'error'}`}>
              <label htmlFor="account">Email : </label>
              <InputItem
                id='account'
                type='text'
                placeholder="請輸入 Email"
                value={email}
                onChange={(e) => handleChangeValue(e.target.value, 'email')}
              />
              <div className="form-item_error">{errorMessage?.emailError}</div>
            </div>
            <PasswordInput
              className={`form-item ${errorMessage?.passwordError && 'error'}`}
              label='密碼 :'
              password={password}
              placeholder='請輸入4-12個字元 (包含英文大小寫及數字)'
              onChange={(e) => handleChangeValue(e.target.value, 'password')}
              error={errorMessage?.passwordError}
              maxlength={12}
            />
            <PasswordInput
              className={`form-item ${errorMessage?.checkPasswordError && 'error'}`}
              label='確認密碼 :'
              password={checkPassword}
              placeholder='請再次輸入密碼'
              onChange={(e) => handleChangeValue(e.target.value, 'checkPassword')}
              error={errorMessage?.checkPasswordError}
            />

            <button className='form-button'>申請註冊</button>
            <div className="login-register-button">
              <Link to='/login'>
                <span>已有帳號</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default RegisterPage