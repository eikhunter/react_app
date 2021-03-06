import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ClampLines from 'react-clamp-lines';
import Carousel from 'nuka-carousel';
import { Link } from "react-router-dom"

import GoogleMap from '../../map/Google/index'

import '../../../../../sass/includes/item/Results/item.scss'
import BedIcon from '../../../../../assets/svg/bedroom.svg'
import BathroomIcon from '../../../../../assets/svg/bathroom.svg'
import Cross from '../../../../../assets/svg/close.svg'
import Heart from '../../../../../assets/svg/heart.svg'
import Arrow from '../../../../../assets/svg/arrow.svg'

const ResultsItem = (props) => {
  return (
    <div className="rst-Item"
         key={props.id}>
      <div className="rst-Item_Images">
        <div className="rst-Carousel">
          <Carousel
            className="rst-Carousel_Items"
            dragging={false}
            renderBottomCenterControls={() => {}}
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                className="rst-Carousel_Control rst-Carousel_Control-previous" onClick={previousSlide}>
                <Arrow/>
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                className="rst-Carousel_Control rst-Carousel_Control-next" onClick={nextSlide}>
                <Arrow/>
              </button>
            )}>
            <div className="rst-Carousel_ImageContainer">
              <img alt="" src={require('../../../../../assets/images/property1/image1.jpg')} alt="property" className="rst-Carousel_Image"/>
              <div className="rst-Carousel_ClickableArea" onClick={props.show}></div>
            </div>

            <div className="rst-Carousel_ImageContainer">
              <img alt="" src={require('../../../../../assets/images/property1/image2.jpg')} alt="property" className="rst-Carousel_Image"/>
              <div className="rst-Carousel_ClickableArea" onClick={props.show}></div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="rst-Item_Body">
        <Tabs className="rst-Tabs">
          <TabList className="rst-Tabs_Tabs">
            <Tab className="rst-Tabs_Tab">
              <p className="rst-Tabs_Text">Information</p>
            </Tab>

            <Tab className="rst-Tabs_Tab">
              <p className="rst-Tabs_Text">Location</p>
            </Tab>
          </TabList>

          <TabPanel className="rst-Tabs_Content rst-Tabs_Content-information">
            <div className="rst-Information">
              <div className="rst-Information_Body">
                <Link to={'/results/'+props.id} className="rst-Information_Title">{props.title}</Link>
                <p className="rst-Information_Location">{props.location}</p>
                <ClampLines
                  text={props.description}
                  lines="3"
                  ellipsis="..."
                  buttons={false}
                  className="rst-Information_Text"/>
              </div>

              <div className="rst-Information_Footer">
                <div className="rst-Information_Key rst-Information_Key-beds">
                  <p className="rst-Information_KeyText">{props.beds}</p>
                  <span className="rst-Information_Icon">
                    <BedIcon/>
                  </span>
                </div>

                <div className="rst-Information_Key rst-Information_Key-bathrooms">
                  <p className="rst-Information_KeyText">{props.bathrooms}</p>
                  <span className="rst-Information_Icon rst-Information_Icon-bathroom">
                    <BathroomIcon/>
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel className="rst-Tabs_Content rst-Tabs_Content-location">
            <GoogleMap lat={props.lat} lng={props.lng}/>
          </TabPanel>
        </Tabs>
      </div>

      <div className="rst-Item_Meta">
        <div className="rst-Meta">
          <div className="rst-Meta_Body">
            <div className="rst-Meta_ImageContainer">
              <img alt="" src="" className="rst-Meta_Image"/>
            </div>

            <p className="rst-Meta_Name">{props.landlord}</p>
          </div>

          <footer className="rst-Meta_Footer">
            <div className="rst-Action">
              <div className="rst-Action_Actions">
                <button onClick={props.remove} className="rst-Action_Action rst-Action_Action-dislike">
                  <Cross/>
                </button>
                <button onClick={props.add} className="rst-Action_Action rst-Action_Action-like">
                  <Heart/>
                </button>
              </div>
            </div>

            <Link to={`/results/${props.id}`} className="rst-Meta_Link">View property</Link>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ResultsItem

