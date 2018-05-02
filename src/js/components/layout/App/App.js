import React, { Component } from 'react'
import { Route, BrowserRouter, Redirect } from "react-router-dom"

import '../../../../sass/layout/Content/layout.scss'

import Home from '../../layout/Home/index'
import LoginModal from '../../includes/login/Modal/index'
import Results from '../../layout/Results/index'
import Property from '../../layout/Property/index'
import ProgressWheel from '../../includes/wheel/Progress/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginClicked: false,
      cookieToken: document.cookie,
      isLoggedIn: false,
      progressPercent: 0,
      completePages: []
    }
  }

  loginClickedHandler = () => {
    this.setState({ loginClicked: true })
  }

  closeLoginModalHandler = () => {
    this.setState({ loginClicked: false })
  }

  logOut = () => {
    document.cookie = 'perchpeeksession=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.setState({ isLoggedIn: true })
    console.log(this.state.redirect)
  }

  calculatePercent = () => {
    const total = this.state.completePages.length
    let done = 0
    const progressPercent = this.state.progressPercent
    this.state.completePages.forEach( function( item ) {
      if( item.hasError === false ) {
        done += 1;
      }
    });
    this.state.progressPercent = done/total*100;
    this.setState( { progressPercent: progressPercent } );
  }

  render() {
    const { isLoggedIn } = this.state

    if (isLoggedIn) {
      return <Redirect to='/'/>
    }

    return (
      <div className="lyt-Content">
        <BrowserRouter>
          <div className="lyt-Content_Body">
            <Route exact path="/"
                   render={(props) => <Home clicked={this.loginClickedHandler}/>}/>
            <Route exact path="/results"
                   render={(props) => <Results clicked={this.loginClickedHandler}/>}/>
            <Route exact path="/property-detail" component={Property}/>
            <ProgressWheel
              percent={this.state.progressPercent}/>
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

