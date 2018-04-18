import React from 'react'

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
          <a href="" className="lgn-Modal_Link">Forgot password?</a>
        </footer>
      </form>
    </div>
  )
}

export default SignUpForm
