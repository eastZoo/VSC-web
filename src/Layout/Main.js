import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <div className='main'>
      <div className='inner'>
        <Sidebar/>
        <div class="inner__right">
          Main menu
        </div>
      </div>

    </div>
  )
}

export default Main