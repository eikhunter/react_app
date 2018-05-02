import React from 'react'
import { NavLink } from "react-router-dom"

import SearchIcon from '../../../../../assets/svg/search.svg'
import '../../../../../sass/includes/search/Home/search.scss'

const HomeSearch = () => {
  return (
    <div className="hm-Search">
      <h1 className="hm-Search_Title">
        <span className="hm-Search_Title-alternative">AI powered</span> property renting.</h1>
      <form action="results" onSubmit=''>
        <div className="hm-Search_Container">
          <input className="hm-Search_Input" type="text" placeholder="e.g. London, SW9, SW9 9JF"/>
          <NavLink to="/results" className="hm-Search_Submit">
            <SearchIcon/>
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default HomeSearch
