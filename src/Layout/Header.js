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
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header