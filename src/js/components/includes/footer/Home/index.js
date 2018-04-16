import React from 'react'

import styles from '../../../../../sass/includes/footer/Home/footer.scss'

const HomeFooter = () => {
  return (
    <footer className="hm-Footer">
      <div className="hm-Footer_Inner">
        <div className="hm-Footer_Body">
          <ul className="hm-Footer_Items">
            <li className="hm-Footer_Item">
              <p className="hm-Footer_Link">© {(new Date().getFullYear())} PerchPeek</p>
            </li>
            <li className="hm-Footer_Item">
              <a href="/" className="hm-Footer_Link">Privacy policy</a>
            </li>
            <li className="hm-Footer_Item">
              <a href="/" className="hm-Footer_Link">Terms & conditions</a>
            </li>
            <li className="hm-Footer_Item">
              <a href="/" className="hm-Footer_Link">Our technology</a>
            </li>
            <li className="hm-Footer_Item">
              <a href="/" className="hm-Footer_Link">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
