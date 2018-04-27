import React, { Component } from 'react'
import { Route, BrowserRouter, Redirect } from "react-router-dom"

import Home from '../../layout/Home/index'
import LoginModal from '../../includes/login/Modal/index'
import Results from '../../layout/Results/index'
import Property from '../../layout/Property/index'

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
  }

  closeLoginModalHandler = () => {
    this.setState({ loginClicked: false })
  }

  logOut = () => {
    document.cookie = 'perchpeeksession=' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.setState({ isLoggedIn: true })
    console.log(this.state.redirect)
  }

  render() {
    const { isLoggedIn } = this.state
    return (

      <div className="lyt-Content">
        <BrowserRouter>
          <div>
            <Route exact path="/"
                   component={Home}
                   clicked={this.loginClickedHandler}/>
            <Route exact path="/results" component={Results}/>
            <Route exact path="/property-detail" component={Property}/>
          </div>
        </BrowserRouter>

        <LoginModal
          show={this.state.loginClicked}
          modalClosed={this.closeLoginModalHandler}/>
      </div>
    )

    if (isLoggedIn) {
      return <Redirect to='/'/>
    }
  }
}

export default App

