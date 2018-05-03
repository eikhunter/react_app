import React from 'react'

import ArrowIcon from '../../../../../../assets/svg/arrow.svg'
import '../../../../../../sass/includes/header/Filters/Filter/filter.scss'

const AllFilter = (props) => {
  return (
    <div className="hd-Filters_Item">
      <button onClick={props.clicked} className="flt-Filter_Button">
        Filters
        <span className="flt-Filter_Icon"
              style={{
                transform: props.show ? 'rotate(0)' : 'rotate(-180deg)' }}>
          <ArrowIcon/>
        </span>
      </button>

      <div className="flt-Filter_Body flt-Filter_Body-all" style={{
        opacity: props.show ? '1' : '0',
        display: props.show ? 'block': 'none'}}>

        <header className="flt-Filter_Header">
          <p className="flt-Filter_Filtered">Filter your <span className="flt-Filter_Number"> 1,200+</span> results</p>
          <button className="flt-Filter_Clear">Clear</button>
        </header>

        <div className="ft-Filter_Filters">
          <div className="flt-Filter_Categories">
            <div className="flt-Filter_Category">
              <h5 className="flt-Filter_CategoryTitle">Property type</h5>
              <ul className="flt-Filter_Items">
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Apartment
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    House
                  </label>
                </li>
              </ul>
            </div>

            <div className="flt-Filter_Category">
              <h5 className="flt-Filter_CategoryTitle">Letting type</h5>
              <ul className="flt-Filter_Items">
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Short lets
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Pets allowed
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Bills included
                  </label>
                </li>
              </ul>
            </div>

            <div className="flt-Filter_Category">
              <h5 className="flt-Filter_CategoryTitle">Furnishing</h5>
              <ul className="flt-Filter_Items">
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Furnished
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Unfurnished
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Part-furnished
                  </label>
                </li>
              </ul>
            </div>

            <div className="flt-Filter_Category">
              <h5 className="flt-Filter_CategoryTitle">Features</h5>
              <ul className="flt-Filter_Items">
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Garden
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Parking
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Balcony
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Wooden floors
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Porter/security
                  </label>
                </li>
                <li className="flt-Filter_Item">
                  <label htmlFor="" className="flt-Filter_Label">
                    <input type="checkbox" className="flt-Filter_Checkbox"/>
                    Fireplace
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllFilter
