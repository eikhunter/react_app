import React from 'react'

import Backdrop from '../../../../components/layout/Backdrop/index'
import SignUpFormContainer from '../../form/SignUpFormContainer/index'

import CloseIcon from '../../../../../assets/svg/close.svg'
import styles from '../../../../../sass/includes/modal/Login/modal.scss'

class LoginModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleSignUp: true,
    }
  }

  signUpToggleHandler = () => {
    this.setState({toggleSignUp: !this.state.toggleSignUp})
  }

  render() {
    return (
      <div className="lgn-Modal" style={{
        display: this.props.show ? 'flex' : 'none'
      }}>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}/>

        <button className="lgn-Modal_Close"
                onClick={this.props.modalClosed}>
          <CloseIcon/>
        </button>

        <div className="lgn-Modal_Inner">
          <div className="lgn-Modal_Modal" style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
          }}>
            <SignUpFormContainer
              toggleSignUp={this.state.toggleSignUp}/>

            <footer className="lgn-Modal_Footer">
              <p className="lgn-Modal_Text">{this.state.toggleSignUp ? 'Already have an account?' : 'Don\'t have an account?'}<button
                className="lgn-Modal_Link"
                onClick={this.signUpToggleHandler}>{this.state.toggleSignUp ? 'Login' : 'Sign up'}</button></p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginModal
