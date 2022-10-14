import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='side-menu'>
          <div className='icon'>
            <ul className='menu'>
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
      <div className='popup__menu'>
        
      </div>
    </div>
  )
}

export default Sidebar