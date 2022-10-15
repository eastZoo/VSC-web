import React, { useState } from 'react'
// import './Sidebar.css'

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);

  const toggle = () => {
    if(!isOpen){
      setIsOpen((prev) => !prev);
    } else {
      setIsOpen((prev) => !prev);
    }
  }
  return (
    <div className='sidebar'>
        <div className='main_side'>
            <ul className='menu' onClick={toggle}>
              <li>
                <div class="material-icons">file_copy</div>
              </li>
              <li>
                <div class="material-icons">search</div>
              </li>
              <li>
                <div class="material-icons">rebase_edit</div>
              </li>
              <li>
                <div class="material-icons">adb</div>
              </li>
              <li>
                <div class="material-icons">extension</div>
              </li>
            </ul>
        </div>
        {/* 사이드바 버튼 토글시 나오는 메뉴 */}
        {isOpen ? 
        <div className='sub_side'>
          sub_side 
        </div> 
        : 
        <div className='sub_side_close'>
        </div>}
        {children}
    </div>
  )
}

export default Sidebar