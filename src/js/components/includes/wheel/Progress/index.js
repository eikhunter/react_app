import React from 'react'
import classSet from '../../../../utils/classSet'

import '../../../../../sass/includes/wheel/Progress/wheel.scss'

class ProgressWheel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate () {
    let percent = parseInt(this.props.percent);
    const deg = 360*percent/100 ;
    const element = this.refs.progress.getDOMNode();
    element.style.transform = 'rotate(-'+ deg +'deg)';
  }

  render() {
    let percent = Math.floor(this.props.percent);
    const classes = classSet({
      "progress-pie-chart": true,
      "gt-50": percent > 50
    })

    return (
      <div className="progress clearfix">
        <div className={classes}>
          <div className="ppc-progress">
            <div className="ppc-progress-fill" ref="progress"></div>
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
}

export default ProgressWheel
