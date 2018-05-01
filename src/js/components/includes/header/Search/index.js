import React from 'react'

import SearchIcon from '../../../../../assets/svg/search.svg'
import '../../../../../sass/includes/search/Header/search.scss'

class HeaderSearch extends React.Component {
  render() {
    return (
      <form className="hd-Search">
        <div className="hd-Search_Search">
          <input type="text" className="hd-Search_Input"/>
        </div>
        <select name="" id="" className="hd-Search_Select">
          <option>+1 Miles</option>
          <option>+2 Miles</option>
          <option>+3 Miles</option>
        </select>
        <button className="hd-Search_Submit">
          <SearchIcon/>
        </button>
      </form>
    )
  }
}

export default HeaderSearch
