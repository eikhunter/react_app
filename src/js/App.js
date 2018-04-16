import React, { Component } from 'react'
import { Route, BrowserRouter } from "react-router-dom"

import HomeHeader from './components/includes/header/Home/index'
import HomeFooter from './components/includes/footer/Home/index'
import Home from './components/layout/Home/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HomeHeader/>
          <Route exact path="/" component={Home}/>
          <HomeFooter/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

