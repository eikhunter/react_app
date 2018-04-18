import React, { Component } from 'react'
import { Route, BrowserRouter } from "react-router-dom"

import HomeHeader from './components/includes/header/Home/index'
import HomeFooter from './components/includes/footer/Home/index'
import Home from './components/layout/Home/index'
import LoginModal from './components/includes/login/Modal/index'

class App extends Component {
  state = {
    loginClicked: false,
    showLoginForm: false
  }

  loginClickedHandler = () => {
    this.setState({loginClicked: true})
  }

  toggleLoginFormHandler = () => {
   // this.setState({showFormLogin: true})
    console.log(this.state.showLoginForm)
  }

  render() {
    return (
      <div className="lyt-Content">
        <BrowserRouter>
          <div>
            <HomeHeader
              clicked={this.loginClickedHandler}/>
            <Route exact path="/" component={Home}/>
            <HomeFooter/>
          </div>
        </BrowserRouter>

        <LoginModal
          show={this.state.loginClicked}
          toggle={this.toggleLoginFormHandler}/>
      </div>
    )
  }
}

export default App

