import React, { Component } from 'react'

import ResultsHeader from '../../includes/header/Results/index'
import ResultsList from '../../includes/list/Results/index'

import styles from '../../../../sass/layout/Results/results.scss'

const Results = () => {
  return (
    <div className="lyt-Results">
      <ResultsHeader/>
      <div className="lyt-Results_Inner">
        <div className="lyt-Results_Body">
          <main className="lyt-Results_Main">
            <ResultsList/>
          </main>

          <aside className="lyt-Results_Aside">

          </aside>
        </div>
      </div>
    </div>
  )
}

export default Results

