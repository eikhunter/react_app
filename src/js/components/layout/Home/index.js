import React, { Component } from 'react'

import HomeHeader from '../../includes/header/Home/index'
import HomeSearch from '../../includes/search/Home/index'
import HomeFooter from '../../includes/footer/Home/index'

import styles from '../../../../sass/layout/Home/home.scss'

const Home = (props) => {
  return (
    <div className="lyt-Home">
      <span className="lyt-Home_Shape lyt-Home_Shape-blue"></span>
      <span className="lyt-Home_Shape lyt-Home_Shape-green"></span>
      <div className="lyt-Home_Inner">
        <div className="lyt-Home_Body">
          {
            (document.cookie && props.isLoggedIn ? (<button onClick={this.logOut}>Logout</button>
            ): <HomeHeader clicked={props.clicked}/>)
          }
          <HomeSearch/>
        </div>
      </div>

      <HomeFooter/>
    </div>
  )
}

export default Home

