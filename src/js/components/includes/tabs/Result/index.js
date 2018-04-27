import React from 'react'

import ResultInformation from '../../../includes/information/Result/index'

import style from '../../../../../sass/includes/tabs/Result/tabs.scss'

const ResultTabs = (props) => {
  return (
    <div className="rst-Item_Tabs">
      <div className="rst-Tabs">
        <div className="rst-Tabs_Tabs">
          <button onClick={props.toggle} className="rst-Tabs_Tab rst-Tabs_Tab-active">
            <p className="rst-Tabs_Text">Information</p>
          </button>

          <button onClick={props.toggle} className="rst-Tabs_Tab">
            <p className="rst-Tabs_Text">Location</p>
          </button>
        </div>
      </div>

      <div className="rst-Tabs_Content rst-Tabs_Content-information">
        <ResultInformation information={props.information}/>
      </div>
    </div>
  )
}

export default ResultTabs
