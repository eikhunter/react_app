import React from 'react'

import ResultsHeader from '../../includes/header/Results/index'
import ResultsList from '../../includes/list/Results/index'
import ResultsSideBar from '../../includes/sidebar/Results/index'
import Footer from '../../includes/footer/Footer/index'

import '../../../../sass/layout/Results/results.scss'

const Results = (props) => {
  return (
    <div className="lyt-Results">
      <ResultsHeader
        clicked={props.clicked}/>
      <div className="lyt-Results_Inner">
        <div className="lyt-Results_Body">
          <main className="lyt-Results_Main">
            <ResultsList/>
          </main>

          <aside className="lyt-Results_Aside">
            <ResultsSideBar/>
          </aside>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Results

