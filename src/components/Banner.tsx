import 'styles/Banner.scss';
import { ReactComponent as ArrowLeftIcon } from 'icons/arrow left.svg'
import { ReactComponent as ArrowRightIcon } from 'icons/arrow right.svg'
import { useState } from 'react';

const Banner = (props: { banner?: string[] }) => {
  const { banner } = props
  const [focus, setFocus] = useState(1)

  const transform = { transform: `translateX(-${100 * (focus - 1)}%)` }//計算要往左移的數值

  const handleClickArrow = (arrow: boolean) => {//true : 右,false : 左
    if (!banner) {
      return
    }
    const length = banner.length
    if (arrow === true) {
      if (focus === length) {
        return setFocus(1)
      } else {
        return setFocus(prev => prev + 1)
      }
    }
    else if (focus === 1) {
      setFocus(length)
    } else {
      setFocus(prev => prev - 1)
    }
  }
  return (
    <div className="banner">
      <div className="banner-container container">
        <ul className='banner-list'>
          {banner?.map(item =>
            <li
              key={item}
              className='banner-list_item'
              style={transform} //計算要往左移的數值
            >
              <img src={item} alt={item} />
            </li>)}
        </ul>
        <div
          className="control-left"
          onClick={() => handleClickArrow(false)}
        ><ArrowLeftIcon /></div>
        <div
          className="control-right"
          onClick={() => handleClickArrow(true)}
        ><ArrowRightIcon /></div>
        <ul className="control-bottom">
          {banner?.map((item, index) =>
            <li
              key={item}
              className={`circle ${index + 1 === focus && 'active'}`}
              onClick={() => setFocus(index + 1)}
            />)}
        </ul>
      </div>
    </div>
  )
}
export default Banner