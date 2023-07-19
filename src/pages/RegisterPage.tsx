

import Header from "components/Header"
import { InputItem, PasswordInput } from "components/FormItem"
import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('654')
  }


  return (
    <div className="login-page">
      <Header />
      <div className="login">
        <div className="login_container container">
          <form onSubmit={handleSubmit}>
            <h1>註冊</h1>
            <div className="form-item">
              <label htmlFor="account">帳號 : </label>
              <InputItem
                id='account'
                placeholder="請輸入帳號"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="account">Email : </label>
              <InputItem
                id='account'
                type='email'
                placeholder="請輸入 Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <PasswordInput
              className='form-item'
              label='密碼 :'
              password={password}
              placeholder='請輸入密碼'
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              className='form-item'
              label='確認密碼 :'
              password={checkPassword}
              placeholder='請再次輸入密碼'
              onChange={(e) => setCheckPassword(e.target.value)}
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