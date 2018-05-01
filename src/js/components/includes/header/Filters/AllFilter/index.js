import React from 'react'

import ArrowIcon from '../../../../../../assets/svg/arrow.svg'
import '../../../../../../sass/includes/header/Filters/Filter/filter.scss'

const AllFilter = () => {
  return (
    <div className="hd-Filters_Item">
      <button className="flt-Filter_Button">
        Filters
        <span className="flt-Filter_Icon">
          <ArrowIcon/>
        </span>
      </button>
    </div>
  )
}

export default AllFilter
