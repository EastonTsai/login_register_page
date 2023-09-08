import '../styles/FeatureList.scss'
import { useState } from 'react'

const FeatureList = () => {
  const [view, setView] = useState(false)

  return (
    <div className="feature-list container">
      <h2>
        包含表單的前端驗證:
        <span onClick={() => setView(!view)}>{!view ? '點我看介紹' : '收起介紹'}</span>
      </h2>
      <div className={`detail ${view && 'view'}`}>
        <p>' 帳號, 密碼, 確認密碼, Email ' 不能空白</p>
        <p>' 帳號, 密碼, 確認密碼, Email ' 格式驗證
          <span>( 格式於註冊時輸入框題示 )</span>
        </p>
        <p>' 密碼, 確認密碼 ' 必須相同</p>
        <p>表單送出後驗同時驗證各項目</p>
        <p>驗證失敗會顯示錯誤訊息</p>
        <p>輸入框重新輸入即解除錯誤訊息</p>
        <p>驗證成功會清空輸入框內容
          <span>( 暫不考慮伺服器驗證問題 )</span>
        </p>
      </div>
      <h3>相關技術 : React, Typescript, Sass</h3>
      <h3>安裝套件 : react-router-dom, node-sass</h3>
    </div>
  )
}
export default FeatureList;