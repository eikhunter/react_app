import React from 'react'

import styles from '../../../../../sass/includes/modal/Login/modal.scss'

const LoginModal = (props) => {
    return (
        <div className="lgn-Modal">
          <div className="lgn-Modal_Overlay" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
          }}>
            <div className="lgn-Modal_Inner">
              <div className="lgn-Modal_Modal">
                <footer className="lgn-Modal_Footer">
                  <p className="lgn-Modal_Text">Already have an account?<button className="lgn-Modal_Link"
                  onClick={props.toggle}>{props.toggle ? 'Log in' : 'Sign up'}</button></p>
                </footer>
              </div>
            </div>
          </div>
        </div>
    )
}

export default LoginModal
