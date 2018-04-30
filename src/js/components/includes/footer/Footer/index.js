import React from 'react'

import styles from '../../../../../sass/includes/footer/Footer/footer.scss'
import LinkedInIcon from '../../../../../assets/svg/social/linkedin-circle.svg'
import InstagramIcon from '../../../../../assets/svg/social/instagram-circle.svg'
import TwitterIcon from '../../../../../assets/svg/social/twitter-circle.svg'
import FacebookIcon from '../../../../../assets/svg/social/facebook-circle.svg'

const Footer = () => {
  return (
    <footer className="ft-Footer">
      <div className="ft-Footer_Inner">
        <div className="ft-Footer_Body">
          <ul className="ft-Footer_Items">
            <li className="ft-Footer_Item">
              <p className="ft-Footer_Link">© {(new Date().getFullYear())} PerchPeek</p>
            </li>
            <li className="ft-Footer_Item">
              <a href="/" className="ft-Footer_Link">Privacy policy</a>
            </li>
            <li className="ft-Footer_Item">
              <a href="/" className="ft-Footer_Link">Terms & conditions</a>
            </li>
            <li className="ft-Footer_Item">
              <a href="/" className="ft-Footer_Link">Our technology</a>
            </li>
            <li className="ft-Footer_Item">
              <a href="/" className="ft-Footer_Link">About us</a>
            </li>
          </ul>

          <ul className="ft-Footer_Socials">
            <li className="ft-Footer_Social">
              <a href="#" className="ft-Footer_SocialLink">
                <LinkedInIcon/>
              </a>
            </li>
            <li className="ft-Footer_Social">
              <a href="#" className="ft-Footer_SocialLink">
                <InstagramIcon/>
              </a>
            </li>
            <li className="ft-Footer_Social">
              <a href="#" className="ft-Footer_SocialLink">
                <TwitterIcon/>
              </a>
            </li>
            <li className="ft-Footer_Social">
              <a href="#" className="ft-Footer_SocialLink">
                <FacebookIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
