import React from 'react'
import axios from 'axios'

import FacebookIcon from '../../../../../assets/svg/social/facebook.svg'
import TwitterIcon from '../../../../../assets/svg/social/twitter.svg'
import GoogleIcon from '../../../../../assets/svg/social/google.svg'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      password: '',
      user_type: 'tenant'
    }
  }

  emailInputHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  passwordInputHandler = (event) => {
    this.setState({ password: event.target.value })
  }

  userTypeInputHandler = (event) => {
    this.setState({ user_type: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()

    const user = "email=" + this.state.email + '&password=' + this.state.password + '&user_type=' + this.state.user_type

    console.log(user)

    const instance = axios.create({
      baseURL: 'http://10.200.110.116/api/0.01/',
      timeout: 1000,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });

    instance.post('/register', user)
      .then(res => {
        let d = new Date
        d.setDate(d.getDate() + 30)

        let expires = "expires=" + d

        document.cookie = "perchpeeksession" + "=" + res.data.success.token + expires + ";path=/"
        this.props.setAuthStatus(true)
      })
      .catch(err => {
        console.log(err, "There was an error")
      })
  }

  render() {
    return (
      <div className="lgn-Modal_Body">
        <h3 className="lgn-Modal_Title">Sign up</h3>
        <form method="post" onSubmit={this.submitHandler} className="frm-Form">
          <div className="frm-Form_Body">
            <ul className="frm-Form_Items">
              <li className="frm-Form_Item">
                <label htmlFor="email" className="frm-Form_Label">
                  Email
                  <input className="frm-Form_Input"
                         type="email"
                         name="email"
                         ref={email => this.email = email}
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

              <li className="frm-Form_Item">
                <label htmlFor="" className="frm-Form_Label">
                  What are you?
                  <select defaultValue="tenant" onChange={this.userTypeInputHandler}
                          className="frm-Form_Select">
                    <option value="tenant">Tenant</option>
                    <option value="landlord">Landlord</option>
                  </select>
                </label>
              </li>
            </ul>
          </div>

          <footer className="frm-Form_Footer">
            <button
              className="frm-Form_Submit"
              type="submit">Sign up</button>

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

            <p href="" className="lgn-Modal_Text">Need help?<a href="#" className="lgn-Modal_Link"> Contact us</a></p>
          </footer>
        </form>
      </div>
    )
  }
}

export default SignUpForm
