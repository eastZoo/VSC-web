import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='inner'>
        <a href='/' className='logo'>
          <img src="./images/VSC.svg" alt="VSCode" />
        </a>
        <div className='sub-menu'>
          <ul className='menu'>
            <li>
              <Link to='/'>Main</Link>
            </li>
            <li>
              <Link to='/youtube'>Youtube</Link>
            </li>
            <li>
              <Link to='/twitch'>Twitch</Link>
            </li>
            <li>
              <Link to='/tistoy'>Tistory</Link>
            </li>
            <li>
              <Link to='/cafe'>Cafe</Link>
            </li>
            <li>
              <Link href='/'>Help</Link>
            </li>
          </ul>
        </div>
        <div className='title'>
          <div className='title__'>Header.js - Untitled (Wordkspace) - Visual Studio Code</div>
        </div>
        <div className='icons'>
          <div className="media-icon">
              <div class="material-icons">library_music</div>
              <div class="material-icons">video_library</div>
              <div class="material-icons">collections_bookmark</div>
              <div class="material-icons">library_add</div>
          </div>
          <div className="window">
              <div class="material-icons">minimize</div>
              <div class="material-icons">filter_none</div>
              <div class="material-icons">close</div>
            </div>
        </div>   
      </div>
    </div>
  )
}

export default Header