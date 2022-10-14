import React from 'react'
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
              <a href='/'>File</a>
            </li>
            <li>
              <a href='/'>Edit</a>
            </li>
            <li>
              <a href='/'>Selection</a>
            </li>
            <li>
              <a href='/'>View</a>
            </li>
            <li>
              <a href='/'>Go</a>
            </li>
            <li>
              <a href='/'>Run</a>
            </li>
            <li>
              <a href='/'>Terminal</a>
            </li>
            <li>
              <a href='/'>Help</a>
            </li>
          </ul>
        </div>
        <div className='title'>
          <h3>Header.js - Untitled (Wordkspace) - Visual Studio Code</h3>
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