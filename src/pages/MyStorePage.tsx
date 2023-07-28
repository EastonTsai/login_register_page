import 'styles/MyStorePage.scss';
import Header from "components/Header"
import { useState } from 'react';
import MyStoreCreate from 'components/MyStoreCreate';
import MyStoreProject from 'components/MyStoreProject';
import MyStoreInformation from 'components/MyStoreInformation';

const MyStorePage = () => {
  const [navActive, setNavActive] = useState('商品管理')

  return (
    <div className="my-store-page">
      <div className="my-store-page_100vh">
        <Header />
        <main className="my-store-page_main">
          <div className="my-store_container container">
            {/* <div className="my-store_create-store">
            新店開幕
          </div> */}
            <ul className="my-store_nav">
              <li
                className={`my-store_nav_item ${navActive === '商品管理' && 'active'}`}
                onClick={() => setNavActive('商品管理')}
              >商品管理</li>
              <li
                className={`my-store_nav_item ${navActive === '店舖資訊' && 'active'}`}
                onClick={() => setNavActive('店舖資訊')}
              >店舖資訊</li>
              <li
                className={`my-store_nav_item ${navActive === '新增商品' && 'active'}`}
                onClick={() => setNavActive('新增商品')}
              >新增商品</li>
            </ul>
            <div className="my-store_wrap">
              {navActive === '商品管理' && <MyStoreProject />}
              {navActive === '店舖資訊' && <MyStoreInformation />}
              {navActive === '新增商品' && <MyStoreCreate />}
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}


export default MyStorePage