import React from 'react'
import { Redirect } from 'react-router'
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
    }
  }

  emailInputHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  passwordInputHandler = (event) => {
    this.setState({ password: event.target.value })
  }

  loginSubmitHandler = (event) => {
    event.preventDefault()

    const user = "email=" + this.state.email + '&password=' + this.state.password

    const instance = axios.create({
      baseURL: 'http://10.200.110.116/api/0.01/',
      timeout: 1000,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });

    instance.post('/login', user)
      .then(res => {
        let d = new Date
        d.setDate(d.getDate() + 30)

        let expires = ";expires=" + d

        document.cookie = "perchpeeksession" + "=" + res.data.success.token + expires + ";path=/"
        console.log('changing state')
      })
      .catch(err => {
        console.log(err, "There was an error")
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
                    onChange={this.emailInputHandler}/>
                </label>
              </li>

              <li className="frm-Form_Item">
                <label htmlFor="" className="frm-Form_Label">
                  Password
                  <input
                    className="frm-Form_Input"
                    type="password"
                    name="password"
                    onChange={this.passwordInputHandler}/>
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
