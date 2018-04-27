import React from 'react'

import style from '../../../../../sass/includes/meta/Result/meta.scss'
import Cross from '../../../../../assets/svg/close.svg'
import Heart from '../../../../../assets/svg/heart.svg'

const ResultMeta = (props) => {
  return (
    <div className="rst-Meta">
      <div className="rst-Meta_Body">
        <div className="rst-Meta_ImageContainer">
          <img alt="" src="" className="rst-Meta_Image"/>
        </div>

        <p className="rst-Meta_Name">{props.metaInformation.landlord}</p>
      </div>

      <footer className="rst-Meta_Footer">
        <div className="rst-Action">
          <div className="rst-Action_Actions">
            <button className="rst-Action_Action rst-Action_Action-dislike">
              <Cross/>
            </button>
            <button className="rst-Action_Action rst-Action_Action-like">
              <Heart/>
            </button>
          </div>
        </div>

        <a href="" className="rst-Meta_Link">View property</a>
      </footer>
    </div>
  )
}

export default ResultMeta
