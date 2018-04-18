import React from 'react'

const LoginForm = () => {
  return (
    <div className="lgn-Modal_Body">
      <h3 className="lgn-Modal_Title">Login</h3>
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
          </ul>
        </div>

        <footer className="frm-Form_Footer">
          <button className="frm-Form_Submit">Login</button>

          <p className="lgn-Modal_Text lgn-Modal_Text-break">or</p>
          <a href="" className="lgn-Modal_Link">Forgot password?</a>
        </footer>
      </form>
    </div>
  )
}

export default LoginForm
