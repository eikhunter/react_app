import React, { Component } from 'react'
import { Route, BrowserRouter } from "react-router-dom"

import HomeHeader from '../../includes/header/Home/index'
import Home from '../../layout/Home/index'
import LoginModal from '../../includes/login/Modal/index'
import Results from '../../layout/Results/index'

class App extends Component {
  state = {
    loginClicked: false,
    showLoginForm: false,
  }

  loginClickedHandler = () => {
    this.setState({ loginClicked: true })
  }

  closeLoginModalHandler = () => {
    this.setState({ loginClicked: false })
  }

  render() {
    return (
      <div className="lyt-Content">
        <BrowserRouter>
          <div>
            <HomeHeader
              clicked={this.loginClickedHandler}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/results" component={Results}/>
          </div>
        </BrowserRouter>

        <LoginModal
          show={this.state.loginClicked}
          modalClosed={this.closeLoginModalHandler}/>
      </div>
    )
  }
}

export default App

