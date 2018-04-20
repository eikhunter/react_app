import React, { Component } from 'react'
import { Route, BrowserRouter, Redirect } from "react-router-dom"

import HomeHeader from '../../includes/header/Home/index'
import Home from '../../layout/Home/index'
import LoginModal from '../../includes/login/Modal/index'
import Results from '../../layout/Results/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginClicked: false,
      cookieToken: document.cookie,
      isLoggedIn: false
    }
  }

  loginClickedHandler = () => {
    this.setState({ loginClicked: true })
    console.log(this.state.isLoggedIn)
  }

  closeLoginModalHandler = () => {
    this.setState({ loginClicked: false })
  }

  setAuthStatus = () => {
    this.setState({
      isLoggedIn: true,
    })
    console.log(this.state.isLoggedIn)
  }

  logOut = () => {
    document.cookie = 'perchpeeksession=' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  render() {
    return (
      <div className="lyt-Content">
        <BrowserRouter>
          <div>
            {
              (document.cookie ? (<button onClick={this.logOut}>Logout</button>
              ): <HomeHeader clicked={this.loginClickedHandler}/>)
            }
            <Route exact path="/" component={Home}/>
            <Route exact path="/results" component={Results}/>
          </div>
        </BrowserRouter>

        <LoginModal
          show={this.state.loginClicked}
          modalClosed={this.closeLoginModalHandler}
          checkAuth={this.setAuthStatus}/>
      </div>
    )
  }
}

export default App

