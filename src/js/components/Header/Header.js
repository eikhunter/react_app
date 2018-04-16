import React from 'react'

import logo from '../../../assets/logo.png'
import styles from './Header.scss'

const Header = () => {
  return (
    <div className="hd-Header">
      <div className="hd-Header_Inner">
        <div className="hd-Header_Body">
          <a href="/" className="hd-Header_Logo">
            <img alt="logo" src={logo}/>
          </a>
          <nav className="hd-Navigation">
            <ul className="hd-Navigation_Items">
              <li className="hd-Navigation_Item">
                <a href="/" className="hd-Navigation_Link">List your property</a>
              </li>
              <li className="hd-Navigation_Item">
                <a href="/" className="hd-Navigation_Link">Sign up / Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
