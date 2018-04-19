import React, { Component } from 'react'

import HomeSearch from '../../includes/search/Home/index'
import HomeFooter from '../../includes/footer/Home/index'

import styles from '../../../../sass/layout/Home/home.scss'

const Home = () => {
  return (
    <div className="lyt-Home">
      <span className="lyt-Home_Shape lyt-Home_Shape-blue"></span>
      <span className="lyt-Home_Shape lyt-Home_Shape-green"></span>
      <div className="lyt-Home_Inner">
        <div className="lyt-Home_Body">
          <HomeSearch/>
        </div>
      </div>

      <HomeFooter/>
    </div>
  )
}

export default Home

