import React from 'react'

import Footer from '../../includes/footer/Footer/index'
import Header from '../../includes/header/Header/index'

import '../../../../sass/layout/Property/property.scss'
import BedIcon from '../../../../assets/svg/bedroom.svg'
import BathroomIcon from '../../../../assets/svg/bathroom.svg'
import Cross from '../../../../assets/svg/close.svg'
import Heart from '../../../../assets/svg/heart.svg'
import Message from '../../../../assets/svg/message.svg'
import Tabs from 'react-tabs/esm/components/Tabs'

const Property = (props) => {
  return (
    <div className="lyt-Property">
      <Header/>
      <div className="lyt-Property_ImageContainer">
        <img src={require('../../../../assets/images/property1/image3.jpg')} alt="property" className="lyt-Property_Image"/>
      </div>
      <div className="lyt-Property_Inner">
        <div className="lyt-Property_Container">
          <div className="lyt-Property_Body">
            <main className="lyt-Property_Main">
              <div className="prp-Detail">
                <header className="prp-Detail_Header">
                  <p className="prp-Detail_Available">2 Bedrooms available</p>
                  <h2 className="prp-Detail_Title">Stunning 4-Bedroom apartment, Algate East</h2>
                  <p className="prp-Detail_Location">Algate East, London</p>

                  <div className="prp-Detail_Keys">
                    <div className="prp-Detail_Key prp-Detail_Key-beds">
                      <p className="prp-Detail_KeyText">3</p>
                      <span className="prp-Detail_Icon">
                        <BedIcon/>
                      </span>
                    </div>

                    <div className="prp-Detail_Key prp-Detail_Key-bathrooms">
                      <p className="prp-Detail_KeyText">2</p>
                      <span className="prp-Detail_Icon prp-Detail_Icon-bathroom">
                        <BathroomIcon/>
                      </span>
                    </div>
                  </div>

                  <div className="prp-Detail_Links">
                    <a href="/" className="prp-Detail_Link">Make offer</a>
                    <a href="/" className="prp-Detail_Link">Share</a>
                  </div>
                </header>

                <div className="prp-Detail_Body">
                  <div className="tbs-Detail">
                    <Tabs className="tbs-Detail_Tabs">
                      <div className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Key details</p>
                      </div>
                      <div className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Transport & location</p>
                      </div>
                      <div className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Documents</p>
                      </div>
                      <div className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Reviews</p>
                      </div>
                    </Tabs>
                  </div>
                </div>
              </div>
            </main>
            <aside className="lyt-Property_Aside">
              <div className="asi-Detail">
                <header className="asi-Detail_Header">
                  <div className="asi-Detail_ImageContainer">
                    <img alt="" src="" className="asi-Detail_Image"/>
                  </div>

                  <div className="asi-Detail_Content">
                    <h4 className="asi-Detail_Title">Dan Gamble</h4>
                  </div>

                  <div className="asi-Detail_Icon">
                    <Message/>
                  </div>
                </header>

                <div className="asi-Detail_Body">
                  <ul className="asi-Detail_Items">
                    <li className="asi-Detail_Item">
                      <p className="asi-Detail_Key">Rent (per month)</p>
                      <p className="asi-Detail_Key-detail">£4,325</p>
                    </li>

                    <li className="asi-Detail_Item">
                      <p className="asi-Detail_Key">Available</p>
                      <p className="asi-Detail_Key-detail">Today</p>
                    </li>

                    <li className="asi-Detail_Item">
                      <p className="asi-Detail_Key">Fees</p>
                      <p className="asi-Detail_Key-detail">None</p>
                    </li>
                  </ul>
                </div>

                <footer className="asi-Detail_Footer">
                  <div className="asi-Detail_Action asi-Detail_Action-dislike">
                    <Cross/>
                  </div>

                  <button className="asi-Detail_Link">Book viewing</button>

                  <div className="asi-Detail_Action asi-Detail_Action-like">
                    <Heart/>
                  </div>
                </footer>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Property

