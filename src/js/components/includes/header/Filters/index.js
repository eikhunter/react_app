import React from 'react'

import AllFilter from './AllFilter/index'
import PriceFilter from './PriceFilter/index'
import BedsFilter from './BedsFilter/index'
import '../../../../../sass/includes/header/Filters/header.scss'

const HeaderFilters = () => {
  return (
    <div className="hd-Filters">
      <ul className="hd-Filters_Items">
        <AllFilter/>
        <PriceFilter/>
        <BedsFilter/>
      </ul>
    </div>
  )
}


export default HeaderFilters
