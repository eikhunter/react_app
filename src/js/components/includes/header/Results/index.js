import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import HeaderSearch from '../../header/Search/index'
import HeaderFilters from '../../header/Filters/index'

import Simplelogo from '../../../../../assets/images/logo-simple.png'
import styles from '../../../../../sass/includes/header/Results/header.scss'

const ResultsHeader = (props) => {
  return (
    <header className="rst-Header">
      <div className="rst-Header_Inner">
        <div className="rst-Header_Body">
          <ul className="rst-Header_Items">
            <li className="rst-Header_Item">
              <NavLink to="/" className="rst-Header_Logo">
                <img alt="logo" src={Simplelogo}/>
              </NavLink>
            </li>

            <li className="rst-Header_Item">
              <HeaderSearch/>
            </li>

            <li className="rst-Header_Item">
              <HeaderFilters/>
            </li>
          </ul>

          <nav className="rst-Header_Navigation">
            <ul className="rst-Header_Items">
              <li className="rst-Header_Item">
                <a href="#" className="rst-Header_Link">List your property</a>
              </li>
              <li className="rst-Header_Item">
                <a href="#" className="rst-Header_Link">Sign up / Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default ResultsHeader
