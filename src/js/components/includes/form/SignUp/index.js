import React from 'react'

import FacebookIcon from '../../../../../assets/svg/social/facebook.svg'
import TwitterIcon from '../../../../../assets/svg/social/twitter.svg'
import GoogleIcon from '../../../../../assets/svg/social/google.svg'

const SignUpForm = () => {
  return (
    <div className="lgn-Modal_Body">
      <h3 className="lgn-Modal_Title">Sign up</h3>
      <form action="" className="frm-Form">
        <div className="frm-Form_Body">
          <ul className="frm-Form_Items">
            <li className="frm-Form_Item">
              <label htmlFor="" className="frm-Form_Label">
                Email
                <input className="frm-Form_Input" type="text"/>
              </label>
            </li>

            <li className="frm-Form_Item">
              <label htmlFor="" className="frm-Form_Label">
                Password
                <input className="frm-Form_Input" type="text"/>
              </label>
            </li>

            <li className="frm-Form_Item">
              <label htmlFor="" className="frm-Form_Label">
                What are you?
                <select name="" id="" className="frm-Form_Select">
                  <option value="Tenant">Tenant</option>
                  <option value="Landlord">Landlord</option>
                </select>
              </label>
            </li>
          </ul>
        </div>

        <footer className="frm-Form_Footer">
          <button className="frm-Form_Submit">Sign up</button>

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

export default SignUpForm
