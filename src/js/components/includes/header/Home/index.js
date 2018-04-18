import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import logo from '../../../../../assets/images/logo.png'
import styles from '../../../../../sass/includes/header/Home/header.scss'

const HomeHeader = (props) => {
  return (
    <header className="hm-Header">
      <div className="hm-Header_Inner">
        <div className="hm-Header_Body">
          <NavLink to="/" className="hm-Header_Logo">
            <img alt="logo" src={logo}/>
          </NavLink>

          <nav className="hm-Header_Navigation">
            <ul className="hm-Header_Items">
              <li className="hm-Header_Item">
                <NavLink to="/list-property" className="hm-Header_Link">List your property</NavLink>
              </li>

              <li className="hm-Header_Item">
                <button
                  onClick={props.clicked}
                  className="hm-Header_Link hm-Header_Link-secondary">Sign up / Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
