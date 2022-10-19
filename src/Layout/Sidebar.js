import React, { useState } from 'react'
// import './Sidebar.css'

const Sidebar = (props) => {
  const[isOpen ,setIsOpen] = useState(false);

  const toggle = () => {
    if(!isOpen){
      setIsOpen((prev) => !prev);
      props.onSaveOpenData(isOpen);
    } else {
      setIsOpen((prev) => !prev);
      props.onSaveOpenData(isOpen);
    }
  }
  return (
    <>
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
      </div>
    </>
    
  )
}

export default Sidebar