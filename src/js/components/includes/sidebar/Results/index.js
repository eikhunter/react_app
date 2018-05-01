import React from 'react'

import { Tabs, TabPanel } from 'react-tabs';

const ResultsSideBar = () => {
  return (
    <div className="rst-SideBar">
      <Tabs className="rst-SideBar_Tabs">
        <div className="rst-SideBar_Tab">
          <p className="rst-SideBar_Text">0 Favourites</p>
        </div>
        <div className="rst-SideBar_Tab">
          <p className="rst-SideBar_Text">Archived</p>
        </div>

        <TabPanel className="rst-SideBar_TabContent">

        </TabPanel>

        <TabPanel className="rst-SideBar_TabContent">

        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ResultsSideBar
