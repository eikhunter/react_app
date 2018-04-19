import React from 'react'
import axios from 'axios'

import FacebookIcon from '../../../../../assets/svg/social/facebook.svg'
import TwitterIcon from '../../../../../assets/svg/social/twitter.svg'
import GoogleIcon from '../../../../../assets/svg/social/google.svg'


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      userLoggedIn: false
    }
  }

  emailHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  passwordHandler = (event) => {
    this.setState({ password: event.target.value })
  }

  loginSubmitHandler = (event) => {
    event.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log(user)

    axios.post('http://10.200.110.116/api/0.01/login', {user})
      .then(response => {
        console.log(response.data)

        if(response.data.code === 200) {
          console.log('Login successful')
          this.setState({ userLoggedIn: true })
        } else if(response.data.code === 204) {
          console.log('Username or password did not match')
        } else {
          console.log('Username does not exist')
          alert('Username does not exist')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="lgn-Modal_Body">
        <h3 className="lgn-Modal_Title">Login</h3>
        <form method="post" onSubmit={this.loginSubmitHandler} className="frm-Form">
          <div className="frm-Form_Body">
            <ul className="frm-Form_Items">
              <li className="frm-Form_Item">
                <label htmlFor="" className="frm-Form_Label">
                  Email
                  <input
                    className="frm-Form_Input"
                    type="email"
                    name="email"
                    onChange={this.emailHandler}/>
                </label>

                <div className="frm-Form_Extras">
                  <div className="frm-Form_Error">
                    <p className="frm-Form_ErrorText">Y</p>
                  </div>
                </div>
              </li>

              <li className="frm-Form_Item">
                <label htmlFor="" className="frm-Form_Label">
                  Password
                  <input
                    className="frm-Form_Input"
                    type="password"
                    name="password"
                    onChange={this.passwordHandler}/>
                </label>
              </li>
            </ul>
          </div>

          <footer className="frm-Form_Footer">
            <button className="frm-Form_Submit" type="submit">Login</button>

            <p className="lgn-Modal_Text lgn-Modal_Text-break">or</p>
            <div className="lgn-Modal_Socials">
              <ul className="lgn-Modal_SocialItems">
                <li className="lgn-Modal_SocialItem lgn-Modal_SocialItem-facebook">
                  <a href="#" className="lgn-Modal_SocialLink">
                    <FacebookIcon/>
                    Facebook</a>
                </li>

                <li className="lgn-Modal_SocialItem lgn-Modal_SocialItem-twitter">
                  <a href="#" className="lgn-Modal_SocialLink">
                    <TwitterIcon/>
                    Twitter</a>
                </li>

                <li className="lgn-Modal_SocialItem lgn-Modal_SocialItem-google">
                  <a href="#" className="lgn-Modal_SocialLink">
                    <GoogleIcon/>
                    Google</a>
                </li>
              </ul>
            </div>

            <a href="" className="lgn-Modal_Link">Forgot password?</a>
          </footer>
        </form>
      </div>
    )
  }
}

export default LoginForm
