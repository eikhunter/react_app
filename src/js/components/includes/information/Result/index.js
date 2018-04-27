import React from 'react'

import styles from '../../../../../sass/includes/information/Result/information.scss'
import BedIcon from '../../../../../assets/svg/bedroom.svg'
import BathroomIcon from '../../../../../assets/svg/bathroom.svg'

const ResultInformation = (props) => {
  return (
    <div className="rst-Information">
      <div className="rst-Information_Body">
        <a className="rst-Information_Title">{props.information.title}</a>
        <p className="rst-Information_Location">{props.information.location}</p>
        <p className="rst-Information_Text">{props.information.description}</p>
      </div>

      <div className="rst-Information_Footer">
        <div className="rst-Information_Key rst-Information_Key-beds">
          <p className="rst-Information_KeyText">{props.information.beds}</p>
          <span className="rst-Information_Icon">
            <BedIcon/>
          </span>
        </div>

        <div className="rst-Information_Key rst-Information_Key-bathrooms">
          <p className="rst-Information_KeyText">{props.information.bathrooms}</p>
          <span className="rst-Information_Icon rst-Information_Icon-bathroom">
            <BathroomIcon/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ResultInformation
