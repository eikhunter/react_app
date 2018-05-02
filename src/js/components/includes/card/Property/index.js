import React from 'react'

import '../../../../../sass/includes/card/Property/card.scss'

const PropertyCard = (props) => {
  return (
    <a href="/" className="prp-Card">
      <div className="prp-Card_ImageContainer">
        <img src={require('../../../../../assets/images/property1/image1.jpg')} alt="property" className="prp-Card_Image"/>
      </div>
      <div className="prp-Card_Content">
        <h4 className="prp-Card_Title">{props.title}</h4>
        <ul className="prp-Card_Items">
          <li className="prp-Card_Item">
            <p className="prp-Card_Text">- {props.price}</p>
          </li>
          <li className="prp-Card_Item">
            <p className="prp-Card_Text">- {props.beds} Bedrooms</p>
          </li>
          <li className="prp-Card_Item">
            <p className="prp-Card_Text">- {props.bathrooms} Bathrooms</p>
          </li>
        </ul>
      </div>
    </a>
  )
}

export default PropertyCard
