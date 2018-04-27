import React from 'react'

import ArrowIcon from '../../../../../../assets/svg/arrow.svg'

const BedsFilter = () => {
  return (
    <div className="hd-Filters_Item">
      <button className="flt-Filter_Button">
        Any price
        <span className="flt-Filter_Icon">
          <ArrowIcon/>
        </span>
      </button>
    </div>
  )
}

export default BedsFilter
