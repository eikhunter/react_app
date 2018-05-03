import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

import Footer from '../../includes/footer/Footer/index'
import Header from '../../includes/header/Header/index'

import GoogleMap from '../../includes/map/Google/index'

import '../../../../sass/layout/Property/property.scss'
import '../../../../sass/includes/documents/Documents/documents.scss'
import '../../../../sass/includes/reviews/Reviews/reviews.scss'
import BedIcon from '../../../../assets/svg/bedroom.svg'
import BathroomIcon from '../../../../assets/svg/bathroom.svg'
import Cross from '../../../../assets/svg/close.svg'
import Heart from '../../../../assets/svg/heart.svg'
import Message from '../../../../assets/svg/message.svg'
import Work from '../../../../assets/svg/work.svg'
import People from '../../../../assets/svg/people.svg'
import Document from '../../../../assets/svg/document.svg'
import LongArrow from '../../../../assets/svg/long-arrow.svg'

const Property = () => {
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
                  <Tabs className="tbs-Detail">
                    <TabList className="tbs-Detail_Tabs">
                      <Tab className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Key details</p>
                      </Tab>
                      <Tab className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Transport & location</p>
                      </Tab>
                      <Tab className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Documents</p>
                      </Tab>
                      <Tab className="tbs-Detail_Tab">
                        <p className="tbs-Detail_Text">Reviews</p>
                      </Tab>
                    </TabList>

                    <TabPanel className="tbs-Detail_Content">
                      <div className="prp-Details">
                        <div className="prp-Details_Blocks">
                          <div className="prp-Details_Block">
                            <h3 className="prp-Details_Title">Letting information</h3>
                            <ul className="prp-Details_Items">
                              <li className="prp-Details_Item">
                                <p className="prp-Details_Text">Date available</p>
                                <p className="prp-Detail_Text prp-Details_Text-bold">01/06/2018</p>
                              </li>

                              <li className="prp-Details_Item">
                                <p className="prp-Details_Text">Furnishing</p>
                                <p className="prp-Detail_Text prp-Details_Text-bold">Furnished</p>
                              </li>

                              <li className="prp-Details_Item">
                                <p className="prp-Details_Text">Deposit</p>
                                <p className="prp-Detail_Text prp-Details_Text-bold">£3200</p>
                              </li>

                              <li className="prp-Details_Item">
                                <p className="prp-Details_Text">Letting type</p>
                                <p className="prp-Detail_Text prp-Details_Text-bold">Long term</p>
                              </li>

                              <li className="prp-Details_Item">
                                <p className="prp-Details_Text">Deposit</p>
                                <p className="prp-Detail_Text prp-Details_Text-bold">£3200</p>
                              </li>
                            </ul>
                          </div>
                          <div className="prp-Details_Block">
                            <h3 className="prp-Details_Title">Key information</h3>

                            <ul className="prp-Details_Features">
                              <li className="prp-Details_Feature">24/7 concierge</li>
                              <li className="prp-Details_Feature">Close to all transport links</li>
                              <li className="prp-Details_Feature">Available furnished</li>
                              <li className="prp-Details_Feature">Balcony</li>
                              <li className="prp-Details_Feature">Car park</li>
                            </ul>
                          </div>

                          <div className="prp-Details_Block">
                            <h3 className="prp-Details_Title">Description</h3>

                            <p className="prp-Details_Text">This exceptionally large three bedroom apartment is presented in excellent condition throughout. The property comprises, light and airy open plan kitchen reception leading to a fantastic roof terrace, master bedroom with en-suite, two further double bedrooms, main bathroom, utility area and secure off street parking space. Raines Court is situated close to the fantastic variety of shops, bars and restaurants of Stoke Newington Church Street. Transport links include Stoke Newington Station (National Rail), Rectory Road Station (National Rail) and a large number of bus routes providing links in to The City and West End.</p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel className="tbs-Details_Content">
                      <div className="prp-Details_Blocks">
                        <div className="prp-Details_Block">
                          <h3 className="prp-Details_Title">Key locations</h3>

                          <ul className="prp-Details_KeyLocations">
                            <li className="prp-Details_KeyLocation">
                              <People/>
                              3.6m from your friends in Stratford
                            </li>
                            <li className="prp-Details_KeyLocation">
                              <Work/>
                              2.5m from where you work
                            </li>
                          </ul>
                        </div>

                        <div className="prp-Details_Block">
                          <h3 className="prp-Details_Title">Map</h3>

                          <div className="prp-Details_Map">
                            <GoogleMap lat={51.5026792} lng={-0.0193058}/>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel className="tbs-Details_Content">
                      <div className="dcm-Documents">
                        <header className="dcm-Documents_Header">
                          <div className="dcm-Documents_Key dcm-Documents_Key-name">
                            <h4 className="dcm-Document_Title">Name</h4>
                          </div>
                          <div className="dcm-Documents_Key dcm-Documents_Key-type">
                            <h4 className="dcm-Document_Title">Type</h4>
                          </div>
                          <div className="dcm-Documents_Key dcm-Documents_Key-size">
                            <h4 className="dcm-Document_Title">Size</h4>
                          </div>

                          <div className="dcm-Documents_Key dcm-Documents_Key-download">download
                            <LongArrow/>
                          </div>
                        </header>

                        <div className="dcm-Document_Body">
                          <ul className="dcm-Documents_Items">
                            <li className="dcm-Documents_Item">
                              <div className="dcm-Document">
                                <div className="dcm-Document_Name">
                                  <span className="dcm-Document_Icon">
                                    <Document/>
                                  </span>
                                  <p className="dcm-Document_Text">floorplan-v1.doc</p>
                                </div>

                                <div className="dcm-Document_Type">
                                  <p className="dcm-Document_Text">Floorplan</p>
                                </div>

                                <div className="dcm-Document_Size">
                                  <p className="dcm-Document_Text">320kb</p>
                                </div>

                                <a href="/" className="dcm-Document_Link">download
                                  <LongArrow/>
                                </a>
                              </div>
                            </li>

                            <li className="dcm-Documents_Item">
                              <div className="dcm-Document">
                                <div className="dcm-Document_Name">
                                  <span className="dcm-Document_Icon">
                                    <Document/>
                                  </span>
                                  <p className="dcm-Document_Text">floorplan-v1.doc</p>
                                </div>

                                <div className="dcm-Document_Type">
                                  <p className="dcm-Document_Text">Floorplan</p>
                                </div>

                                <div className="dcm-Document_Size">
                                  <p className="dcm-Document_Text">320kb</p>
                                </div>

                                <a href="/" className="dcm-Document_Link">download
                                  <LongArrow/>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel className="tbs-Details_Content">
                      <div className="rvw-Reviews">
                        <header className="rvw-Review_Header">
                          <div className="rvw-Review_ImageContainer">
                            <img alt="" src="" className="rvw-Review_Image"/>
                          </div>
                          <div className="rvw-Reviews_SubmitReview">
                            <input type="text" className="rvw-Reviews_Input" placeholder="Write a review..."/>
                          </div>
                        </header>

                        <ul className="rvw-Reviews_Items">
                          <li className="rvw-Reviews_Item">
                            <div className="rvw-Review">
                              <header className="rvw-Review_Header">
                                <div className="rvw-Review_ImageContainer">
                                  <img alt="" src="" className="rvw-Review_Image"/>
                                </div>
                                <h5 className="rvw-Review_Title">Tim Jones</h5>
                              </header>

                              <div className="rvw-Review_Body">
                                <p className="rvw-Review_Text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci debitis deserunt dolorem doloribus eius eligendi eum explicabo harum hic id illum in, iure necessitatibus omnis perferendis quisquam repellat similique</p>
                              </div>
                            </div>
                          </li>

                          <li className="rvw-Reviews_Item">
                            <div className="rvw-Review">
                              <header className="rvw-Review_Header">
                                <div className="rvw-Review_ImageContainer">
                                  <img alt="" src="" className="rvw-Review_Image"/>
                                </div>
                                <h5 className="rvw-Review_Title">Tim Jones</h5>
                              </header>

                              <div className="rvw-Review_Body">
                                <p className="rvw-Review_Text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci debitis deserunt dolorem doloribus eius eligendi eum explicabo harum hic id illum in, iure necessitatibus omnis perferendis quisquam repellat similique</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                  </Tabs>
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

