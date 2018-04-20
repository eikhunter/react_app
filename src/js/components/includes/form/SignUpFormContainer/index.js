import React from 'react'

import SignUpForm from '../SignUp/index'
import LoginForm from '../Login/index'

const SignUpFormContainer = (props) => {
  if (props.toggleSignUp) {
    return <SignUpForm
      checkAuth={props.checkAuth}/>
  }
  return <LoginForm
    checkAuth={this.checkAuth}/>
}

export default SignUpFormContainer
