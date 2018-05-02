import React from 'react'
import classSet from '../../../../utils/classSet'

import '../../../../../sass/includes/wheel/Progress/wheel.scss'

const ProgressWheel = (props) => {
  let percent = Math.floor(props.percent);
  const classes = classSet({
    "progress-pie-chart": true,
    "gt-50": percent > 2
  })

  return (
    <div className="progress clearfix">
      <div className={classes}>
        <div className="ppc-progress">
          <div className="ppc-progress-fill"></div>
        </div>
        <div className="ppc-percents">
          <div className="pcc-percents-wrapper">
            <span>{percent + '%'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressWheel
