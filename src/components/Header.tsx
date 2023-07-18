import 'styles/Header.scss'
import { ReactComponent as LoginIcon } from 'icons/user_Circle.svg'
import { ReactComponent as SettingIcon } from 'icons/setting.svg'
import { ReactComponent as SearchIcon } from 'icons/search.svg'
import { ReactComponent as StoreIcon } from 'icons/store.svg'
import { ReactComponent as Cart } from 'icons/cart.svg'

import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const currentPath = useLocation().pathname.split('/')[1]
  //useLocation().split('/') = ['' , 'pathname] 所以要取第二個
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header_logo">
          <Link to='/'>在地商家網路平台</Link>
        </div>
        <ul className="header_nav">
          <li className={`nav_item ${currentPath === 'shopping_cart' && 'active'}`}>
            <Link to='/shopping_cart'>
              <Cart />
              <p>購物車</p>
            </Link>
          </li>
          <li className={`nav_item ${currentPath === 'store' && 'active'}`}>
            <Link to='/store'>
              <StoreIcon />
              <p>商店</p>
            </Link>
          </li>
          {/* <li className="nav_item"> //還沒想好的搜尋功能 
            <Link to='/'>
              <SearchIcon />
              <p>搜尋</p>
            </Link>
          </li> */}
          <li className={`nav_item ${currentPath === 'setting' && 'active'}`}>
            <Link to='/setting'>
              <SettingIcon />
              <p>設定</p>
            </Link>
          </li>
          <li className={`nav_item ${currentPath === 'login' && 'active'}`}>
            <Link to='/login'>
              <LoginIcon />
              <p>登入</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header