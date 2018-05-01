import React from 'react'

const PropertyCard = (props) => {
  return (
    <a className="fvt-Item">
      <div className="fvt-Item_ImageContainer">
        <img alt="" src="" className="fvt-Item_Image"/>
      </div>
      <div className="fvt-Item_Content">
        <h4 className="fvt-Item_Title">{props.title}</h4>
        <p className="fvt-Item_Text">{props.price}</p>
        <p className="fvt-Item_Text">{props.beds}</p>
        <p className="fvt-Item_Text">{props.bathrooms}</p>
      </div>
    </a>
  )
}

export default PropertyCard
