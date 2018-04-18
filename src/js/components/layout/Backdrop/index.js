import React from 'react'

import classes from '../../../../sass/layout/Backdrop/backdrop.scss'

const Backdrop = (props) => (
  props.show ? <div onClick={props.clicked}
                    className="lyt-Backdrop"></div> : null
)

export default Backdrop
