import React, { Component } from 'react'
import { Route, BrowserRouter, Redirect } from "react-router-dom"
import resultsData from '../../../../results/results.json'

import '../../../../sass/layout/Content/layout.scss'

import Home from '../../layout/Home/index'
import LoginModal from '../../includes/login/Modal/index'
import Results from '../../layout/Results/index'
import ProgressWheel from '../../includes/wheel/Progress/index'
import Property from '../Property/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginClicked: false,
      cookieToken: document.cookie,
      isLoggedIn: false,
      progressPercent: 3,
      results: resultsData.results
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

  render() {
    const { isLoggedIn } = this.state

    if (isLoggedIn) {
      return <Redirect to='/'/>
    }

    console.log(this.state.results)

    return (
      <div className="lyt-Content">
        <BrowserRouter>
          <div className="lyt-Content_Body">
            <Route exact path="/"
                   render={(props) => <Home clicked={this.loginClickedHandler}/>}/>
            <Route exact path="/results"
                   render={(props) => <Results clicked={this.loginClickedHandler} results={this.state.results}/>}/>
            <Route path="/results/:propertyId"
                   render={({ match }) => <Property results={this.state.results.find(p => p.id === match.params.propertyId)}/>}/>
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

