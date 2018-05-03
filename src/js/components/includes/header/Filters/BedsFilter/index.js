import React from 'react'

import ArrowIcon from '../../../../../../assets/svg/arrow.svg'

const BedsFilter = (props) => {
  return (
    <div className="hd-Filters_Item">
      <button onClick={props.clicked} className="flt-Filter_Button">
        Any Beds
        <span className="flt-Filter_Icon"
              style={{
                transform: props.show ? 'rotate(0)' : 'rotate(-180deg)' }}>
          <ArrowIcon/>
        </span>
      </button>

      <div className="flt-Filter_Body" style={{
        opacity: props.show ? '1' : '0',
        display: props.show ? 'flex': 'none'}}>

        <div className="flt-Filter_Content">
          <select name="" id="" className="flt-Filter_Select">
            <option>No min</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <p className="flt-Filter_Text">to</p>

          <select name="" id="" className="flt-Filter_Select">
            <option>No-Max</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default BedsFilter
