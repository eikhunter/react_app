import React, { Component } from 'react'

import HomeSearch from '../../includes/search/Home/index'

import styles from '../../../../sass/layout/Home/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="lyt-Home">
        <span className="lyt-Home_Shape lyt-Home_Shape-blue"></span>
        <span className="lyt-Home_Shape lyt-Home_Shape-green"></span>
        <div className="lyt-Home_Inner">
          <div className="lyt-Home_Body">
            <HomeSearch/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

