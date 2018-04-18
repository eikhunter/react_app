import React from 'react'

import SignUpForm from '../SignUp/index'
import LoginForm from '../Login/index'

const SignUpFormContainer = (props) => {
  if (props.toggleSignUp) {
    return <SignUpForm/>
  }
  return <LoginForm/>
}

export default SignUpFormContainer
