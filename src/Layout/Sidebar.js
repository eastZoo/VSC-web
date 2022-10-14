import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Sidepop from '../components/SidePop/Sidepop'
import Main from './Main';
import './Sidebar.css'

const Sidebar = (children) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen (!isOpen);
    console.log(isOpen)
  }
  return (
    <div className='sidebar'>
        <div className='main_side'>
            <ul className='menu'>
              <li onClick={toggle}>
                <div class="material-icons">file_copy</div>
              </li>
              <li>
                <Link to='/twitch'>
                  <div class="material-icons">search</div>
                </Link>
              </li>
              <li>
                <Link to='/cafe'>
                  <div class="material-icons">rebase_edit</div>
                </Link>
              </li>
              <li>
                <Link to='/tistory'>
                  <div class="material-icons">adb</div>
                </Link> 
              </li>
              <li>
                <Link to='/code'>
                  <div class="material-icons">extension</div>
                </Link> 
              </li>
            </ul>
        </div>
        <div className='sub_side'>
          sub_side
        </div>
    </div>
  )
}

export default Sidebar