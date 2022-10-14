import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Sidepop from '../components/SidePop/Sidepop'
import Main from '../components/Main';
import './Sidebar.css'

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen (!isOpen);
    console.log(isOpen)
  }
  return (
    <div className='sidebar'>
        <div className='main_side'>
            <ul className='menu'>
                <Link to='/'>
                <div class="material-icons">file_copy</div>
                </Link>
              <li>
                <Link to='/youtube'>
                  <div class="material-icons">search</div>
                </Link>
              </li>
              <li>
                <Link to='/twitch'>
                  <div class="material-icons">rebase_edit</div>
                </Link>
              </li>
              <li>
                <Link to='/tistoy'>
                  <div class="material-icons">adb</div>
                </Link> 
              </li>
              <li>
                <Link to='/cafe'>
                  <div class="material-icons">extension</div>
                </Link> 
              </li>
            </ul>
        </div>
        {/* 사이드바 버튼 토글시 나오는 메뉴 */}
        <div className='sub_side'>
          sub_side
        </div>
        {/* 메인 컨텐츠 창 */}
        <div className='content'>{children}</div>
    </div>
  )
}

export default Sidebar