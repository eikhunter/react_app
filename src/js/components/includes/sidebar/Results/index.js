import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PropertyCard from '../../card/Property/index'

import '../../../../../sass/includes/sidebar/Result/sidebar.scss'

const ResultsSideBar = (props) => {
  const favourites = props.favourites.map((result, index) => (
    <li className="fvt-List_Item">
      <PropertyCard
        key={result.id}
        title={result.title}
        price={result.price}
        beds={result.beds}
        bathrooms={result.bathrooms}/>
    </li>
  ))

  const archived = props.archived.map((result, index) => (
    <li className="fvt-List_Item">
      <PropertyCard
        key={result.id}
        title={result.title}
        price={result.price}
        beds={result.beds}
        bathrooms={result.bathrooms}/>
    </li>
  ))

  return (
    <Tabs className="rst-SideBar">
      <TabList className="rst-SideBar_Tabs">
        <Tab className="rst-SideBar_Tab">
          <p className="rst-SideBar_Text">{archived.length} Favourites</p>
        </Tab>
        <Tab className="rst-SideBar_Tab">
          <p className="rst-SideBar_Text">Archived</p>
        </Tab>
      </TabList>

      <TabPanel className="rst-SideBar_TabContent rst-SideBar_TabContent-favourites">
        <div className="fvt-List">
          <ul className="fvt-List_Items">
            {props.favourites.length ? favourites : <div>You have no favourites. </div>}
          </ul>
        </div>
      </TabPanel>

      <TabPanel className="rst-SideBar_TabContent rst-SideBar_TabContent-archived">
        <div className="fvt-List">
          <ul className="fvt-List_Items">
            {props.archived.length ? {archived} : <div>You have no archived items. </div>}
          </ul>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default ResultsSideBar
